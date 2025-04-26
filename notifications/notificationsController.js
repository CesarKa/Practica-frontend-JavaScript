import { buildNotification } from "./notificationsView.js"

export function notificationsController(notifications) {
    const showNotification = (message) => {
        const newNotification = document.createElement('div');
        newNotification.innerHTML = buildNotification(message);

        const removeNotification = () => {
            newNotification.remove();   
        }

        notifications.appendChild(newNotification)

        const closeButton = newNotification.querySelector("button");

        closeButton.addEventListener("click", () => {
            removeNotification()
        });

        setTimeout(() => {
            removeNotification()
        }, 5000);  

        
    }

    return {
        showNotification
    }
};