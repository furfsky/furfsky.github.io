(() => {
  let container = document.getElementById("faq");
  data.faq.forEach((section) => {
    let sect = document.createElement("section");
    let title = document.createElement("h1");
    let note = document.createElement("p");
    //Give title its html stuff
    title.innerHTML = section.name;
    title.className = "sectionTitle";
    title.id = section.id;
    //Give note its html stuff
    note.innerHTML = section.note;
    note.className = "sectionNote";
    sect.appendChild(title);
    sect.appendChild(note);
    section.items.forEach((item) => {
      let wrapper = document.createElement("div");
      let question = document.createElement("h2");
      //OPTIONAL
      let photo = document.createElement("img");
      let answer = document.createElement("h3");
      //OPTIONAL
      let related = document.createElement("h4");

      wrapper.className = "item";

      question.innerHTML = item.question;
      question.className = "itemQuestion";

      photo.src = item.photo;
      photo.className = "itemPhoto";

      answer.innerHTML = item.answer;
      answer.className = "itemAnswer";

      related.innerHTML = item.related;
      related.className = "itemRelated";

      wrapper.appendChild(question);
      if(item.photo) wrapper.appendChild(photo);
      wrapper.appendChild(answer);
      if(item.related) wrapper.appendChild(related);
      sect.appendChild(wrapper);
    });
    container.appendChild(sect);
  });
})();
