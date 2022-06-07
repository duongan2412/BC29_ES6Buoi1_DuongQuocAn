const addSpan = () => {
    let content = "";
    const str = document.querySelector(".heading").innerHTML;
    // console.log(str);
    const chart = [...str];
    // console.log(chart);
    chart.forEach((ele) => {
        content += `<span>${ele}</span>`;
    })
    document.querySelector(".heading").innerHTML = content;
}

addSpan();