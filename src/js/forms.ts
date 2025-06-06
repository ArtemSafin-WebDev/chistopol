import Validator from "./classes/Validator";
import axios from "axios";

export default function forms() {
  const forms = Array.from<HTMLFormElement>(
    document.querySelectorAll(".js-form")
  );

  forms.forEach((form) => {
    const formValidator = new Validator(form);
    const controller = new AbortController();
    const submitBtn = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]'
    );

    const handleFormSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      if (!formValidator || !form) return;
      formValidator.validate();

      console.log("Validated", formValidator.valid);

      if (formValidator.valid) {
        const formData = new FormData(form);
        if (submitBtn) submitBtn.disabled = true;
        axios
          .post(form.action, formData, {
            signal: controller.signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);
            const parentModal = form.closest<HTMLElement>(".js-modal");
            parentModal?.classList.remove("active");
            const modal = document.querySelector<HTMLElement>("#success-modal");
            if (modal) {
              modal.classList.add("active");
              document.body.classList.add("modal-open");
            }
            if (form) {
              form.reset();
            }
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
          });
      }
    };
    form.addEventListener("submit", handleFormSubmit);
  });
}
