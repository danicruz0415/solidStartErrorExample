export default class ThemeHandler {

  static getTheme(): string {
    let savedTheme = localStorage.getItem('color-theme');

    if (savedTheme) {
        return savedTheme;
    }

    // if no theme has ben saved, check the system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';

}

static setTheme(theme: string) {
    if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
}

static toggleTheme() {
    const currentTheme = ThemeHandler.getTheme();

    if (currentTheme === 'light') {
        ThemeHandler.setTheme('dark');
    } else {
        ThemeHandler.setTheme('light');
    }

}
}