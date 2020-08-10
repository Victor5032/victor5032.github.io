var cvs = document.getElementById('cvs-option');
var git = document.getElementById('git-option');
var command = document.getElementById('command-option');
var install = document.getElementById('install-option');
var github = document.getElementById('github-option');

cvs.addEventListener('click', function() {
    cvs.classList.add('active');
    git.classList.remove('active');
    command.classList.remove('active');
    install.classList.remove('active');
    github.classList.remove('active');
});

git.addEventListener('click', function() {
    cvs.classList.remove('active');
    git.classList.add('active');
    command.classList.remove('active');
    install.classList.remove('active');
    github.classList.remove('active');
});

command.addEventListener('click', function() {
    cvs.classList.remove('active');
    git.classList.remove('active');
    command.classList.add('active');
    install.classList.remove('active');
    github.classList.remove('active');
});

install.addEventListener('click', function() {
    cvs.classList.remove('active');
    git.classList.remove('active');
    command.classList.remove('active');
    install.classList.add('active');
    github.classList.remove('active');
});

github.addEventListener('click', function() {
    cvs.classList.remove('active');
    git.classList.remove('active');
    command.classList.remove('active');
    install.classList.remove('active');
    github.classList.add('active');
});
// alert(url);
