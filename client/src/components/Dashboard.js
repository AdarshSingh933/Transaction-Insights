import React, { useState, useEffect } from 'react';
import { intializeDatabase,fetchTransactions, fetchStatistics, fetchBarChart, fetchPieChart } from '../services/api';
import TransactionTable from './TransactionTable';
import Statistics from './Statistics';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  const [month, setMonth] = useState('March');
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  console.log("month",month);
  console.log("transactions",transactions);
  console.log("statistics",statistics);
  console.log("barcharData",barChartData);
  console.log("pieChartData",pieChartData);
  console.log("page",page);

  useEffect(() => {
    fetchAllData();
    console.log("Inside month",month);
  console.log("transactions",transactions);
  console.log("statistics",statistics);
  console.log("barcharData",barChartData);
  console.log("pieChartData",pieChartData);
  console.log("page",page);
  }, [month, page, search]);

  const fetchAllData = async () => {
     await intializeDatabase();
     
    const transactionsRes = await fetchTransactions(month, page, 10, search);
    setTransactions(transactionsRes.data.transactions);

    const statisticsRes = await fetchStatistics(month);
    setStatistics(statisticsRes.data);

    const barChartRes = await fetchBarChart(month);
    setBarChartData(barChartRes.data);

    const pieChartRes = await fetchPieChart(month);
    setPieChartData(pieChartRes.data);
  };

  return (
    <div>
      <div className={styles.transactionDashboard}>
      <div className={styles.heading}><span>Transaction</span><span>Dashboard</span></div>
      <div className={styles.searchMonth} >
      <input
        type="text"
        placeholder="Search Transaction"
        className={styles.searchTransaction}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select className={styles.selectMonth} value={month} onChange={(e) => setMonth(e.target.value)}>
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      </div>
      <TransactionTable transactions={transactions} />
      <div>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
      </div>
      <Statistics statistics={statistics} />
      <BarChartComponent data={barChartData} />
      <PieChartComponent data={pieChartData} />
    </div>
  );
};

export default Dashboard;
