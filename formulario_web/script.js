// Datos del sistema
const productos = ["Laptop", "Mouse", "Teclado", "Monitor", "Audifonos"];
const cantidades = [25, 80, 50, 30, 45];
const precios = [900, 20, 35, 200, 50];

// Calcular ventas totales
const ventasTotales = cantidades.map((cantidad, i) => cantidad * precios[i]);

// ==============================
// GRÁFICO DE BARRAS
// ==============================

const barChart = new Chart(document.getElementById("barChart"), {

    type: "bar",

    data: {
        labels: productos,
        datasets: [{
            label: "Cantidad Vendida",
            data: cantidades,
            backgroundColor: [
                "#3498db",
                "#2ecc71",
                "#f1c40f",
                "#e74c3c",
                "#9b59b6"
            ]
        }]
    },

    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


// ==============================
// GRÁFICO DE PASTEL
// ==============================

const pieChart = new Chart(document.getElementById("pieChart"), {

    type: "pie",

    data: {
        labels: productos,
        datasets: [{
            data: ventasTotales,
            backgroundColor: [
                "#1abc9c",
                "#3498db",
                "#9b59b6",
                "#e67e22",
                "#e74c3c"
            ]
        }]
    },

    options: {
        responsive: true
    }
});


// ==============================
// GRÁFICO LINEAL
// ==============================

const lineChart = new Chart(document.getElementById("lineChart"), {

    type: "line",

    data: {
        labels: productos,
        datasets: [{
            label: "Ingresos por Producto",
            data: ventasTotales,
            borderColor: "#2980b9",
            backgroundColor: "rgba(52,152,219,0.2)",
            fill: true,
            tension: 0.3
        }]
    },

    options: {
        responsive: true
    }
});