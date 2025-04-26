import { buildNotification } from "./notificationsView.js"

export function notificationsController(notifications) {
    const showNotification = (message) => {
        const newNotification = document.createElement('div');
        newNotification.innerHTML = buildNotification(message);

        notifications.appendChild(newNotification)

        const closeButton = newNotification.querySelector("button");

        closeButton.addEventListener("click", () => {
            newNotification.remove();
        })

          
    }

    return {
        showNotification
    }
};