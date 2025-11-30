const today = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
const dateObj = new Date(today);

const month = dateObj.getMonth() + 1;
const day = dateObj.getDate();

const birthdays = {
    "rin": "10/7",
    "muja": "11/26",
    "atsu": "12/9",
    "kono": "7/9",
    "ibu": "5/13",
    "amu": "5/9",
    "toki": "8/26",
    "robo": "7/27",
    "beru": "2/12",
    "yure": "5/7",
    "eito": "9/5",
    "itsu": "11/23"
};

const todayStr = `${month}/${day}`;

Object.keys(birthdays).forEach(id => {
    if (birthdays[id] === todayStr) {

        const target = document.querySelector(`.mem-${id} img`);

        if (target) {
            target.classList.add("birthday-glow");
        }
    }
});
