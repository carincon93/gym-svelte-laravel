<script>
    import { onMount } from 'svelte'

    export let values = []

    $: if (values.length > 0 && document.getElementById('columnchart_values')) {
        google.charts.setOnLoadCallback(drawChart)
    }

    onMount(() => {
        google.charts.setOnLoadCallback(drawChart)
    })

    function drawChart() {
        var data = new google.visualization.DataTable()

        data.addColumn('string', 'Element')
        data.addColumn('number', 'Density')

        values.map(function (item) {
            data.addRows([['', item]])
        })

        var view = new google.visualization.DataView(data)
        view.setColumns([0, 1, { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }])

        var options = {
            title: 'Historial de peso (Últimos 31 días)',
            height: 200,
            bar: { groupWidth: '65%' },
            legend: { position: 'none' },
            hAxis: {
                direction: -1,
            },
        }
        var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_values'))
        chart.draw(view, options)
    }
</script>

<div id="columnchart_values" />
