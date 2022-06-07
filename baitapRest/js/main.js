const getEle = (id) => document.getElementById(id);

const tinhDTB = (...diem) => {
    console.log(diem);
    let dtb = 0;
    for (let i = 0; i < diem.length; i++) {
        dtb += diem[i];
    }
    return dtb / diem.length;
}

getEle("btnKhoi1").onclick = () => {
    const diemToan = getEle("inpToan").value * 1;
    const diemLy = getEle("inpLy").value * 1;
    const diemHoa = getEle("inpHoa").value * 1;
    const dtb = tinhDTB(diemToan, diemLy, diemHoa);
    getEle("tbKhoi1").innerHTML = dtb;
}

getEle("btnKhoi2").onclick = () => {
    const diemVan = getEle("inpVan").value * 1;
    const diemSu = getEle("inpSu").value * 1;
    const diemDia = getEle("inpDia").value * 1;
    const diemAnh = getEle("inpEnglish").value * 1;
    const dtb = tinhDTB(diemVan, diemSu, diemDia, diemAnh);
    getEle("tbKhoi2").innerHTML = dtb;
}