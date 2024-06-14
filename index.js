document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById('countdown');

    function updateCountdown(number, callback) {
        countdownElement.textContent = number;
        setTimeout(callback, 1000);
    }

    updateCountdown(10, function() {
        updateCountdown(9, function() {
            updateCountdown(8, function() {
                updateCountdown(7, function() {
                    updateCountdown(6, function() {
                        updateCountdown(5, function() {
                            updateCountdown(4, function() {
                                updateCountdown(3, function() {
                                    updateCountdown(2, function() {
                                        updateCountdown(1, function() {
                                            updateCountdown('Happy Independence Day!', function() {
                                                $('#independenceDayModal').modal('show');
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

