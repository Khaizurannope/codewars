const topSecret = str => str.replace(/[a-z]/gi, 
    c => String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3)))

answer1="1850";
answer2="fQT";
answer3="Train tire";