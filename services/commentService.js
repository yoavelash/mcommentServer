const overallStatus = {
    good: [
      "הלך לך טוב בתרץ וגם מקרי הריצה עבדו. ",
      "היה לך טוב בתרץ ומקרי הריצה גם עבדו כמו שצריך. ",
    ],
    bad: [
      "הלך לך לא טוב בתרץ, תקרא?אי את ההערות ותפנים?מי. ",
      "התרץ היה לא טוב וגם מקרי הריצה לא עבדו כמו שצריך. ",
    ],
  };
  
  const overallGit = {
    good: [
      "לגבי הגיט, עבדת בצורה טובה עם מספיק קומיטים ועל פי הסטנדרטים. ",
      "העבודה עם גיט הייתה טובה ועבדת לפי הסטנדרטים עם מספיק קומיטים. ",
      "מבחינת הגיט העבודה הייתה טובה וסטנדרטית. ",
    ],
    bad: ["העבודה עם גיט לא הייתה מספיק טובה. "],
  };
  
  const overallTests = {
    good: [
      "לגבי הטסטים, עבדת בצורה טובה וחשבת על מקרי הבדיקה. "
    ],
    bad: [
      "לגבי הטסטים, לא עבדת עם טסטים כמו שצריך, תקפיד?די על זה להבא. "
    ],
  };
  
  const openMiddle = [
    "שים?מי לב לכמה הערות חשובות שעלו מסקר הקוד: ",
    "דיברנו על כמה נקודות בסקר קוד: ",
    "מסקר הקוד עלו כמה נקודות חשובות: ",
    "שים?מי לב לכמה נקודות שעלו מסקר הקוד: ",
    "בסקר הקוד דיברנו על כמה דברים מרכזיים בקוד: ",
  ];
  
  const mainMiddle = [
    "דיברנו על (הערה). נקודה נוספת שעלתה היא (הערה). שים?מי לב גם ל (הערה). ",
    "(הערה) הייתה הערה שחזרה על עצמה. בנוסף גם חזר על עצמו ש (הערה). שים?מי לב שגם (הערה). ",
    "ראינו ש (הערה) בלטה בקוד. ראינו גם ש (הערה) חזרה על עצמה. בנוסף גם בלט ש (הערה). ",
  ];
  
  const mainFinal = [
    "אם יש שאלות מוזמן?נת לפנות אליי. ",
    "אם משהו עדיין לא ברור מוזמן?נת לפנות אליי. ",
    "אם עולות שאלות נוספות מוזמן?נת לפנות אליי. ",
  ];
  
  const finalSentence = ["בהצלחה!", "בהצלחה בהמשך!"];
  
  const getPartOfCommentByStatus = (commentsArray, commentStatus) => {
    if (commentStatus === "empty") {
      return "";
    }
    return commentsArray[commentStatus][Math.floor(Math.random() * commentsArray[commentStatus].length)];
  };
  
  const getPartOfCommentRandom = (partOfComment) => {
    return partOfComment[Math.floor(Math.random() * partOfComment.length)];
  };
  
  const getCommentWithCurrectGender = (comment, gender) => {
    const words = comment.split(" ");
    words.forEach((word, index) => {
      if (word.includes("?")) {
        if (gender === "female") {
          words[index] =
            word.slice(0, word.indexOf("?") - 1) +
            "" +
            word.slice(word.indexOf("?") + 1);
        } else {
          words[index] = word.slice(0, word.indexOf("?"));
        }
      }
    });
  
    return words.join(" ");
  };
  
  const createComment = (data) => {
      return getCommentWithCurrectGender(
      data.studentName +
      ", " +
      getPartOfCommentByStatus(overallStatus, data.overallStatus) +
      getPartOfCommentRandom(openMiddle) +
      getPartOfCommentRandom(mainMiddle) +
      getPartOfCommentByStatus(overallGit, data.overallGit) +
      getPartOfCommentByStatus(overallTests, data.overallTests) +
      getPartOfCommentRandom(mainFinal) +
      getPartOfCommentRandom(finalSentence),
      data.gender
    );
  };

module.exports = { createComment }