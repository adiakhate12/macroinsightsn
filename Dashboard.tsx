import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Activity, Zap } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "motion/react";

export function Dashboard() {
  const kpis = [
    {
      title: "Croissance PIB",
      value: "+4.5%",
      change: "+0.3pp",
      trend: "up",
      description: "T1 2026",
    },
    {
      title: "Inflation",
      value: "2.6%",
      change: "-0.2pp",
      trend: "down",
      description: "Janvier 2026",
    },
    {
      title: "Crédits Bancaires",
      value: "8 500 Mds",
      change: "+5.2%",
      trend: "up",
      description: "FCFA",
    },
    {
      title: "Balance Commerciale",
      value: "-400 Mds",
      change: "Stable",
      trend: "up",
      description: "FCFA",
    },
  ];

  const growthData = [
    { month: "T1", value: 3.8 },
    { month: "T2", value: 3.9 },
    { month: "T3", value: 4.0 },
    { month: "T4", value: 4.2 },
    { month: "T1 26", value: 4.5 },
  ];

  const contributionData = [
    { sector: "Consommation", value: 58 },
    { sector: "Invest. Publics", value: 22 },
    { sector: "Invest. Privés", value: 18 },
    { sector: "Export. Nettes", value: 2 },
  ];

  const alerts = [
    {
      type: "success",
      title: "Objectif inflation atteint",
      description: "Inflation à 2.6%, sous la cible BCEAO de 3% pour le 6ème mois consécutif",
      time: "Il y a 2h",
    },
    {
      type: "info",
      title: "Accélération du PIB",
      description: "Croissance à 4.5% au T1 2026, portée par la consommation et l'investissement",
      time: "Il y a 5h",
    },
    {
      type: "warning",
      title: "Surveillance balance commerciale",
      description: "Déficit commercial stable à -400 Mds FCFA, vigilance nécessaire",
      time: "Il y a 1j",
    },
  ];

  return (
    <div className="max-w-[1800px] mx-auto px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Vue d'ensemble</h1>
        <p className="text-slate-400">Indicateurs macroéconomiques clés et alertes en temps réel</p>
      </motion.div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg"
          >
            <div className="text-xs uppercase tracking-wider text-slate-400 mb-2">{kpi.title}</div>
            <div className="text-3xl font-bold text-white mb-2">{kpi.value}</div>
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-1 text-sm font-medium ${
                kpi.trend === "up" ? "text-green-400" : "text-red-400"
              }`}>
                {kpi.trend === "up" ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {kpi.change}
              </div>
              <div className="text-xs text-slate-500">{kpi.description}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">
        {/* Graphique Croissance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-2 bg-slate-900/50 border border-slate-800 rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold mb-6">Évolution de la Croissance</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} domain={[3.5, 4.5]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 4, fill: "#3b82f6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Alertes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900/50 border border-slate-800 rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-orange-500" />
            <h3 className="text-lg font-semibold">Alertes Économiques</h3>
          </div>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="border-l-2 border-slate-700 pl-4">
                <div className="flex items-start gap-3">
                  {alert.type === "warning" && <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />}
                  {alert.type === "info" && <Activity className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />}
                  {alert.type === "success" && <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white mb-1">{alert.title}</div>
                    <div className="text-xs text-slate-400 mb-2">{alert.description}</div>
                    <div className="text-xs text-slate-500">{alert.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contributions à la Croissance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-slate-900/50 border border-slate-800 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold mb-6">Contributions à la Croissance du PIB (%)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={contributionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="sector" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
import { useState } from "react";

export default function Dashboard() {
  const [result, setResult] = useState<any>(null);

  async function handlePredict(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      usd: 615,
      m2: 7500,
      taux: 3.5,
      petrole: 80,
    };
    const response = await fetch(
      "https://huggingface.co/spaces/adiakhate12/Senegal-Indice-Predictor/predict",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const json = await response.json();
    setResult(json);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">🇸🇳 MacroInsight AI</h1>
      <button
        onClick={handlePredict}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Lancer la prédiction
      </button>
      {result && (
        <div className="mt-4">
          <p>Prédiction: {result.prediction}</p>
          <p>Variation: {result.variation}</p>
          <p>Alerte: {result.alert}</p>
        </div>
      )}
    </div>
  );
}
