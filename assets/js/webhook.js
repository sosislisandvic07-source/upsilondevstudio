/* ============================================
   DISCORD WEBHOOK GÖNDERİCİ
============================================ */

function sendWebhook(data) {

    const webhookURL = "https://discord.com/api/webhooks/1441523888952447006/5aW7iOLcKCabtM9SPB6g-fW-rL9qv5VHeTgrzUrn7i8UV2mBFYBtTH5sfElPanO-7hww";

    const payload = {
        embeds: [
            {
                title: "📩 Yeni İletişim Mesajı",
                color: 16777215,
                fields: [
                    { name: "Gönderen", value: data.name, inline: true },
                    { name: "Discord", value: data.discord, inline: true },
                    { name: "Mesaj", value: data.message }
                ],
                footer: { text: "Upsilon Dev Studio • Otomatik Webhook Sistemi" }
            }
        ]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })
    .then(() => console.log("Mesaj gönderildi"))
    .catch(() => console.log("Webhook hata verdi"));
}

