document.getElementById("getDoctorBtn").addEventListener("click", function() {
    var selectedDate = document.getElementById("date").value;
    var selectedArea = document.getElementById("area").value;

    var phoneNumbers = {
        "Dr. Dawit": "+251920192199",
        "Dr. Lewam": "+251934343144",
        "Dr. Helina": "+251913110147",
        "Dr. Anteneh": "+251912412707",
        "Dr. Genet": "+251921931429",
        "Dr. Rediet": "+251021146518",
        "Dr. Rewina": "+251913670699"
    };

    var schedule = {
        "01": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"},
        "02": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "03": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina"},
        "04": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Lewam"},
        "05": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "06": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Anteneh"},
        "07": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "08": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "09": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "10": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Anteneh"},
        "11": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "12": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Helina"},
        "13": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"},
        "14": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "15": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina"},
        "16": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Lewam"},
        "17": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "18": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Anteneh"},
        "19": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "20": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "21": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "22": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Anteneh"},
        "23": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "24": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Helina"},
        "25": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"},
        "26": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "27": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina"},
        "28": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Lewam"},
        "29": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "30": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Anteneh"},
        "31": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"}
    };

    var formattedDate = selectedDate.substring(8);
    var doctorName = schedule[formattedDate][selectedArea];
    var doctorPhoneNumber = phoneNumbers[doctorName];
    var doctorElement = document.getElementById("doctor");

    if (doctorName) {
        doctorElement.innerHTML = "Doctor on duty for " + selectedArea + " on March " + formattedDate + " is <strong>" + doctorName + "</strong>. <br> Phone number: " + doctorPhoneNumber;
        document.getElementById("date").value = "";
    } else {
        doctorElement.innerText = "No schedule found for the selected date.";
    }
});
