    var form = document.getElementById("modal-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("modal-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Дякую! Повідомлення відправлене.";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Помилка... Спробуйте ще раз"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Помилка... Спробуйте ще раз"
      });
    }
form.addEventListener("submit", handleSubmit);