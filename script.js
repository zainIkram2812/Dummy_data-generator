const generateBtn = document
  .getElementById("generate-btn")
  .addEventListener("click", async () => {
    const res = await fetch("/generate-data", { method: "POST" });
    const data = await res.json();
    console.log(data);

    document.getElementById("result").innerText =
      "Dummy Data is generated successfully";

    const list = await fetch("/employee", { method: "GET" });
    const listData = await list.json();
    const dataList = document.getElementById("data-list");
    console.log(listData);

    dataList.innerHTML = "";
    listData.forEach((employee) => {
      const li = document.createElement("li");
      li.innerText = `Name: ${employee.name} - Language: ${employee.language} - Salary: ${employee.salary} - City: ${employee.city} - Manager: ${employee.isManager}`;
      dataList.appendChild(li);
    });
  });
