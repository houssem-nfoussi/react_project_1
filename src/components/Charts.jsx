import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'react-circular-progressbar/dist/styles.css';
import './Charts.css';

const wasteData = [
  { name: 'Pain', value: 113000, color: '#4CAF50' },
  { name: 'Fruits & Légumes', value: 30000, color: '#81C784' },
  { name: 'Céréales', value: 25000, color: '#A5D6A7' },
  { name: 'Produits Laitiers', value: 15000, color: '#C8E6C9' },
  { name: 'Huiles', value: 10000, color: '#E6EE9C' },
  { name: 'Autres', value: 20000, color: '#F0F4C3' },
];

const TOTAL_WASTE = wasteData.reduce((acc, curr) => acc + curr.value, 0);

const pieData = [
  { name: 'Pain', value: 113000 },
  { name: 'Fruits &  Légumes', value: 30000 },
  { name: 'Céréales', value: 25000 },
  { name: 'Produits Laitiers', value: 15000 },
  { name: 'Huiles', value: 10000 },
  { name: 'Autres', value: 20000 },
];

const COLORS = ['#4CAF50', '#81C784', '#A5D6A7', '#C8E6C9', '#E6EE9C', '#F0F4C3'];

const formatCircularText = (name) => {
  const words = name.split(' ');
  return (
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '1.1em', fontWeight: 500, fill: '#333' }}>
      {words.slice(0, Math.ceil(words.length / 2)).join(' ')}
      {words.length > 1 && (
        <tspan x="50%" dy="1.2em" textAnchor="middle">
          {words.slice(Math.ceil(words.length / 2)).join(' ')}
        </tspan>
      )}
    </text>
  );
};

const Charts = () => {
  return (
    <motion.div
      className="charts-container"
      style={{ padding: '2rem' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#388E3C' }}>
        Statistiques sur le Gaspillage Alimentaire en Tunisie
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
        Ces statistiques fournissent un aperçu du gaspillage alimentaire en Tunisie, avec un focus sur les types de gaspillage alimentaire.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {wasteData.map((item, index) => (
          <div
            key={index}
            style={{
              width: '170px', // Slightly larger container
              height: '170px', // Slightly larger container
              margin: '1rem',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <CircularProgressbar
              value={(item.value / TOTAL_WASTE) * 100}
              styles={{
                path: {
                  stroke: item.color,
                  strokeWidth: 8, // Slightly thinner stroke
                  strokeLinecap: 'round', // Rounded ends for a smoother look
                },
                trail: {
                  stroke: '#d6d6d6',
                  strokeWidth: 8,
                  strokeLinecap: 'round',
                },
              }}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {formatCircularText(item.name)}
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart remains the same */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ textAlign: 'center', color: '#388E3C' }}>Répartition du Gaspillage Alimentaire</h3>
        <ResponsiveContainer width="100%" height={300} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              labelLine={false}
              label={({ name, value }) => `${name}: ${(value / TOTAL_WASTE * 100).toFixed(1)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value.toFixed(0)} tonnes`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default Charts;