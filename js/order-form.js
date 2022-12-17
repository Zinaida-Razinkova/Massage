    var orderForm = document.getElementById("order-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("order-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: orderForm.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Дякую! Повідомлення відправлене.";
          orderForm.reset()
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
orderForm.addEventListener("submit", handleSubmit);