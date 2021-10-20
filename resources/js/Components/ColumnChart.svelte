<script>
    import { onMount } from 'svelte'

    export let values = []
    export let chartType

    $: if (values.length > 0 && document.getElementById('columnchart_values' + chartType)) {
        google.charts.setOnLoadCallback(drawChart)
    }

    onMount(() => {
        google.charts.setOnLoadCallback(drawChart)
    })

    function drawChart() {
        var data = new google.visualization.DataTable()

        data.addColumn('string', 'Element')
        data.addColumn('number', 'Peso')
        data.addColumn({ type: 'string', role: 'style' })

        values.map(function (item) {
            data.addRows([['', item, '#6200ee']])
        })

        var view = new google.visualization.DataView(data)
        view.setColumns([0, 1, { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }, 2])

        var options = {
            title: 'Historial de ' + chartType + ' (Últimas 31 series)',
            height: 200,
            bar: { groupWidth: '65%' },
            legend: { position: 'none' },
            hAxis: {
                direction: -1,
            },

            animation: {
                duration: 1000,
                easing: 'out',
            },
        }
        var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_values' + chartType))
        chart.draw(view, options)
    }
</script>

<div id="columnchart_values{chartType}" />
