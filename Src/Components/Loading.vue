<template>
    <div class="container title-md">
        <span class="letter">l</span>
        <span class="letter">o</span>
        <span class="letter">a</span>
        <span class="letter">d</span>
        <span class="letter">i</span>
        <span class="letter">n</span>
        <span class="letter">g</span>
    </div>
</template>

<style>
/* Animation */
@keyframes light-loader {
    to {
        transform: translateY(5px);
    }
}

.letter {
    margin: 0 2px;
    font-family: 'maven-bold';
    animation: light-loader 0.4s linear alternate infinite;
}

.letter:nth-child(2) {
    animation-delay: 0.10s;
}

.letter:nth-child(3) {
    animation-delay: 0.20s;
}

.letter:nth-child(4) {
    animation-delay: 0.30s;
}

.letter:nth-child(5) {
    animation-delay: 0.40s;
}

.letter:nth-child(6) {
    animation-delay: 0.50s;
}

.letter:nth-child(7) {
    animation-delay: 0.60s;
}
</style>