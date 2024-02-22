function createIntensityLevel(minIntensity, maxIntensity) {
  const root = document.getElementById("intensity-level")
  const min = document.createElement("span")
  min.textContent = `Intensity Level: ${minIntensity} ~ ${maxIntensity}`
  root.appendChild(min)

  const help = document.createElement("span")
  help.classList.add("material-symbols-outlined")
  help.classList.add("show-intensity-modal")
  help.textContent = "help"
  root.appendChild(help)

  const modal = document.createElement("div")
  modal.classList.add("intensity-modal")
  root.appendChild(modal)

  const img = document.createElement("img")

  img.src =
    "https://cdn.shopify.com/s/files/1/0579/8379/5374/files/Screenshot_2024-01-10_at_12.19.56.png?v=1704919961"
  img.alt = "intensity-level"
  modal.appendChild(img)

  const div = document.createElement("div")
  div.textContent =
    "The Intensity Level represents both Minimum Intensity and Maximum Intensity."
  modal.appendChild(div)

  const note = document.createElement("div")
  note.style.fontSize = "0.9rem"
  note.innerHTML =
    "<b>Note</b>: Intensity level is a relative indicator that can be perceived differently by each user."
  modal.appendChild(note)
}
