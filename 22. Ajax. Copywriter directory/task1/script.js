$(document).ready(function() {
    $('#format-button').click(function() {
        const jsonData = $('#json-input').val();

        try {
            const parsedJson = JSON.parse(jsonData);
            const formattedJson = JSON.stringify(parsedJson, null, 4);
            $('#result').removeClass('error').text(formattedJson);
        } catch (error) {
            $('#result').addClass('error').text('Error: Invalid JSON format');
        }
    });
});
