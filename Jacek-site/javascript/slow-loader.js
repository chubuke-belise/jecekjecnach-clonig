const cards =  document.querySelectorAll(".slowloader")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.observe(entry.target)
    })
 },
    {
        threshold: 1,
    }
)

 cards.forEach(slowloader => {
    observer.observe(slowloader)
 })