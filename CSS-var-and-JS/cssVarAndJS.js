var inputs = document.querySelectorAll('.controls input');

function updateValues(){
    console.log(this.value)
    var suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', updateValues));
inputs.forEach(input => input.addEventListener('mousemove', updateValues));