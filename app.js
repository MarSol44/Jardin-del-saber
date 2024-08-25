let currentIndex = 0;
const posts = document.querySelectorAll('.featured-posts .post');
const nextBtn = document.querySelector('.next');

nextBtn.addEventListener('click', () => {
    posts[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % posts.length;
    posts[currentIndex].classList.add('active');
});
