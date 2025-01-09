document.getElementById("oeeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    // รับค่าจากฟอร์ม
    let totalTime = parseFloat(document.getElementById("totalTime").value);
    let operatingTime = parseFloat(document.getElementById("operatingTime").value);
    let downtime = parseFloat(document.getElementById("downtime").value);
    let goodProduction = parseFloat(document.getElementById("goodProduction").value);

    // คำนวณ OEE
    let availability = (operatingTime / totalTime) * 100;
    let performance = (goodProduction / (operatingTime * 60)) * 100; // assuming production rate per minute
    let quality = (goodProduction / (goodProduction + downtime)) * 100;

    let oee = (availability * performance * quality) / 10000; // คำนวณ OEE

    // แสดงผลลัพธ์
    document.getElementById("oee").textContent = `OEE: ${oee.toFixed(2)}%`;
});
