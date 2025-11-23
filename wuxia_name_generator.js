const singleSurnames = [
    "李", "王", "張", "劉", "陳", "楊", "趙", "黃", "周", "吳",
    "徐", "孫", "胡", "朱", "高", "林", "何", "郭", "馬", "羅",
    "梁", "宋", "鄭", "謝", "韓", "唐", "馮", "于", "董", "蕭",
    "程", "曹", "袁", "鄧", "許", "傅", "沈", "曾", "彭", "呂",
    "蘇", "盧", "蔣", "蔡", "賈", "丁", "魏", "薛", "葉", "閻",
    "余", "潘", "杜", "戴", "夏", "鍾", "汪", "田", "任", "姜",
    "范", "方", "石", "姚", "譚", "廖", "鄒", "熊", "金", "陸",
    "郝", "孔", "白", "崔", "康", "毛", "邱", "秦", "江", "史",
    "顧", "侯", "邵", "孟", "龍", "萬", "段", "雷", "錢", "湯",
    "尹", "黎", "易", "常", "武", "喬", "賀", "賴", "龔", "文"
];

const doubleSurnames = [
    "慕容", "歐陽", "上官", "司馬", "獨孤", "夏侯", "諸葛", "皇甫",
    "長孫", "宇文", "軒轅", "令狐", "百里", "西門", "南宮", "東方",
    "公孫", "淳于", "申屠", "鍾離", "公羊", "拓跋", "完顏", "耶律"
];

const nameCharactersCommon = [
    "雲", "風", "霜", "雪", "雨", "霧", "雷", "電", "天", "地",
    "玄", "宇", "宙", "洪", "荒", "日", "月", "星", "辰",
    "江", "河", "湖", "海", "山", "川", "林", "木", "花", "草",
    "葉", "竹", "松", "梅", "蘭", "菊", "蓮", "桃", "柳", "楓",
    "劍", "刀", "槍", "戟", "棍", "棒", "弓", "矢", "盾", "甲",
    "仙", "靈", "魂", "心", "意", "念", "情", "愛", "恨", "仇",
    "恩", "怨", "緣", "份", "清", "濁", "冷", "熱", "溫", "涼",
    "寒", "暖", "冰", "火", "光", "暗", "紅", "橙", "黃", "綠",
    "青", "藍", "紫", "白", "黑", "灰", "靜", "止", "安", "寧",
    "平", "和", "吉", "祥", "如", "意", "醉", "夢", "醒", "悟",
    "道", "法", "術", "器", "丹", "陣", "影", "痕", "跡", "蹤",
    "音", "聲", "響", "樂", "歌", "舞", "逍", "遙", "自", "在",
    "飛", "翔", "騰", "躍", "奔", "跑", "行", "破", "立", "絕",
    "滅", "殺", "戮", "戰", "鬥", "爭", "奪", "傲", "狂", "邪",
    "正", "義", "俠", "客", "君", "子", "賢", "逸", "夜", "煙",
    "羽", "墨", "離", "殤", "瀾", "澈", "凌", "霄", "渡", "劫",
    "修", "羅", "剎", "冥", "幽", "淵", "穹", "蒼", "昊", "曦",
    "晨", "暮", "曉", "嵐", "岫", "崖", "峰"
];

const nameCharactersSpecial = [
    "絕", "滄", "靈", "寒", "孤", "幻", "星", "辰", "雁", "鴻",
    "雷", "霆", "瀾", "渺", "煙", "羽", "鳳", "麟", "劍", "刀",
    "夢", "痕", "影", "霞", "霜", "雲", "月", "寒", "墨", "幽",
    "魂", "逸", "塵", "風", "雪", "霞", "瀾", "玄", "羽", "殤",
    "凌", "霄", "渡", "幽", "靈", "幻", "絕", "滄", "夢", "雲"
];

// Combine common and special characters for the pool
const nameCharacters = [...nameCharactersCommon, ...nameCharactersSpecial];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateName() {
    // 1. Determine Surname (Single vs Double)
    // 20% chance for double surname
    const isDoubleSurname = Math.random() < 0.2;
    const surname = isDoubleSurname ? getRandomItem(doubleSurnames) : getRandomItem(singleSurnames);

    // 2. Determine Name Length (Single vs Double)
    // Prompt: Single name 80-90%, Double name 10-20%
    // Let's set double name chance to 15%
    const isDoubleName = Math.random() < 0.15;

    let givenName = "";
    if (isDoubleName) {
        const char1 = getRandomItem(nameCharacters);
        let char2 = getRandomItem(nameCharacters);
        // Avoid same characters
        while (char1 === char2) {
            char2 = getRandomItem(nameCharacters);
        }
        givenName = char1 + char2;
    } else {
        givenName = getRandomItem(nameCharacters);
    }

    return surname + givenName;
}

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const nameDisplay = document.getElementById('name-display');

    generateBtn.addEventListener('click', () => {
        const fullName = generateName();

        // Clear previous content
        nameDisplay.innerHTML = '';

        // Create new span for animation
        const nameSpan = document.createElement('span');
        nameSpan.className = 'generated-name';
        nameSpan.textContent = fullName;

        nameDisplay.appendChild(nameSpan);
    });
});
