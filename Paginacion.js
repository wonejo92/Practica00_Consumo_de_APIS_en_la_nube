function CrearPaginacion() {
    $(document).ready(function () {
        $('#TablaPeliculas').DataTable();
        $('.dataTables_length').addClass('bs-select');
    });
}