import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';
import './Charts.css';

const pieData = [
    { name: 'Pain', value: 113000 },
    { name: 'Fruits & Légumes', value: 30000 },
    { name: 'Céréales', value: 25000 },
    { name: 'Produits Laitiers', value: 15000 },
    { name: 'Huiles', value: 10000 },
    { name: 'Autres', value: 20000 },
];

const TOTAL_WASTE = pieData.reduce((acc, curr) => acc + curr.value, 0);

const COLORS = ['#4CAF50', '#81C784', '#A5D6A7', '#C8E6C9', '#E6EE9C', '#F0F4C3'];

const barData = [
    { region: 'Grand Tunis', waste: 40 },
    { region: 'Sfax', waste: 25 },
    { region: 'Sousse', waste: 20 },
    { region: 'Kairouan', waste: 18 },
    { region: 'Bizerte', waste: 17 },
    { region: 'Autres', waste: 15 },
];

const Charts = () => {
    const [pieChartData, setPieChartData] = useState([]);

    useEffect(() => {
        const calculatedPieData = pieData.map(item => ({
            ...item,
            percentage: ((item.value / TOTAL_WASTE) * 100).toFixed(1),
        }));
        setPieChartData(calculatedPieData);
    }, []);

    const renderCustomizedLabel = (entry) => {
        return `${entry.name} ${entry.percentage}%`;
    };

    return (
        <motion.div
            className="charts-container"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#388E3C' }}>
                Statistiques sur le Gaspillage Alimentaire en Tunisie
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
                Ces statistiques fournissent un aperçu du gaspillage alimentaire en Tunisie, avec un focus sur la région de Tunis. Les données sont des estimations basées sur des études disponibles et peuvent varier.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {/* Pie Chart */}
                <ResponsiveContainer width="100%" height={300} style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <PieChart>
                        <Pie
                            data={pieChartData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            labelLine={false}
                            label={renderCustomizedLabel}
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value.toFixed(0)} tonnes`} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>

                {/* Bar Chart */}
                <ResponsiveContainer width="100%" height={300} style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="region" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="waste" fill="#4CAF50" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center', color: '#555' }}>
                <p><strong>Note:</strong> Les données du graphique à barres sont des estimations régionales du gaspillage alimentaire. Le "Grand Tunis" inclut les zones urbaines autour de la capitale et a tendance à avoir des niveaux de gaspillage plus élevés en raison de la concentration de la population et de l'activité économique.</p>
            </div>
        </motion.div>
    );
};

export default Charts;
