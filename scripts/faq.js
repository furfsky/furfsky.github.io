(() => {
    let container = document.getElementById("faq");
    data.faq.forEach((qAndA) => {
      let wrapper = document.createElement("div");
      wrapper.innerHTML = `
      <h2>${qAndA.question}</h2>
      ${qAndA.photo}
      <h3>${qAndA.answer}${qAndA.relevantLinksAndAllThat}</h3>
      <br>
      `;
      container.appendChild(wrapper);
    });
  })();
  