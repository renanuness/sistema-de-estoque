import { BarChart, PieChart } from '@mui/x-charts';
import * as React from 'react';
import styles from './styles.module.css';

export default function Reports() {


  return (
    <div className={styles.container}>
      <div className={styles.monthContainer}>
        <h1>Vendas por mês</h1>
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'] }]}
          series={[{ data: [15000, 18000.50, 21000.75, 19500, 22000, 25000, 24000.30, 27000.10, 26000, 28000.75, 30000.50, 35000] }]}
          width={830}
          height={400}
          className={styles.barChart}
        />
      </div>
      <div className={styles.categoryContainer}>
        <h1>Vendas por categoria</h1>
        <PieChart
          className={styles.pieChart}
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'Beleza' },
                { id: 1, value: 15, label: 'Móveis' },
                { id: 2, value: 56, label: 'Smartphones' },
                { id: 3, value: 20, label: 'Relógios' },
                { id: 4, value: 40, label: 'Calçados' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </div>
  )
}