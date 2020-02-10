function hideError() {
  var error_labels = document.querySelectorAll(".error")
  error_labels.forEach(function(error_label) {
    error_label.classList.add("hidden")
  })
  document.querySelector(".success").classList.add("hidden")
  document.querySelector(".success_message").classList.add("hidden")
}

hideError()

function validateForm(form) {
  if
  (validateName(form.name.value) &&
  validateAge(form.age.value) &&
  validateEmail(form.email.value) &&
  validatePhone(form.phone.value) &&
  validateCity(form.city.value) &&
  validatePassword(form.password.value, form.confirm_password.value)) {
    document.querySelector(".success_message").classList.remove("hidden")
  } else {
    document.querySelector(".success_message").classList.add("hidden")
  }
}

function validateName(name) {
  if(name == "" || name == null) {
    document.querySelector(".name_error").classList.remove("hidden")
    return false
  } else {
    document.querySelector(".name_error").classList.add("hidden")
    return true
  }
}

function validateEmail(email) {
  var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/
  if(regex.test(email) == false) {
    document.querySelector(".email_error").classList.remove("hidden")
    return false
  } else {
    document.querySelector(".email_error").classList.add("hidden")
    return true
  }
}

function validatePhone(phone) {
  var regex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/
  if(regex.test(phone) == false) {
    document.querySelector(".phone_error").classList.remove("hidden")
    return false
  } else {
    document.querySelector(".phone_error").classList.add("hidden")
    return true
  }
}

function validateCity(city) {
  if(city == "" || city == null) {
    document.querySelector(".city_error").classList.remove("hidden")
    return false
  } else {
    document.querySelector(".city_error").classList.add("hidden")
    return true
  }
}

function validateAge(age) {

  var regex = /^([0-9]{1,2})$/
  if(regex.test(age) == false || age == "" || age == null) {
    document.querySelector(".age_error").classList.remove("hidden")
    return false
  } else {
    document.querySelector(".age_error").classList.add("hidden")
    return true
  }
}

function validatePassword(password, confirm_password) {
  var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  if(regex.test(password) == false) {
    document.querySelector(".password_error").classList.remove("hidden")
    return false
  } else if(password !== confirm_password) {
    document.querySelector(".password_error").classList.add("hidden")
    document.querySelector(".confirm_password_error").classList.remove("hidden")
    return false
  } else {
    document.querySelector(".password_error").classList.add("hidden")
    document.querySelector(".confirm_password_error").classList.add("hidden")
    document.querySelector(".success").classList.remove("hidden")
    return true
  }
}
