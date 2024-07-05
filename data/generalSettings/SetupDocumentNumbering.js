function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

function getRandomYearMonth() {
    const year = "2025";
    const month = counter().toString().padStart(2, '0'); // เรียกใช้ counter() และ padStart กับค่าที่คืนจาก counter()
    console.log(`${year}-${month}`);
    console.log('`${year}-${month}` :>> ', `${year}-${month}`);
    return `${year}-${month}`;
}

export const SetupDocumentNumbering = {
    name: "SC3686",
    Prefix: "SC",
    format: "ym",
    digits: "5",
    nextRun: "99",
    lastNo: "9999",
    get startDate() {
        return getRandomYearMonth();
    },
};
