import { defineStore } from 'pinia';

export function updateTheme(themeName: string, themeColor: string) {
  const newValue = 'https://unpkg.com/primevue/resources/themes/' + themeName + '-' + themeColor + '/theme.css'
  const relElements = Array.prototype.slice.call(document.getElementsByTagName('link'));
  relElements.forEach( (element:HTMLElement) => {
    // @ts-ignore
    if (element.getAttribute("href") && element.getAttribute("href").indexOf("/themes/") > -1)  {
      element.setAttribute('href', newValue);
    }
  });
}

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useThemeStore = defineStore('theme', {
  // a function that returns a fresh state
  state: () => ({
    themeName: 'vela',
    themeColor: 'blue',
  }),
  // optional getters
  getters: {
    theme: (state) => {
      return state.themeName + '-' + state.themeColor;
    },
    isDarkMode: (state) => state.themeName != 'saga',
  },
  // optional actions
  actions: {
    setDark() {
      this.themeName = 'arya';
      updateTheme(this.themeName, this.themeColor);
    },
    setDim() {
      this.themeName = 'vela';
      updateTheme(this.themeName, this.themeColor);

    },
    setLight() {
      this.themeName = 'saga';
      updateTheme(this.themeName, this.themeColor);
    },
    setColor(colorName: string) {
      this.themeColor = colorName;
      updateTheme(this.themeName, this.themeColor);
    },
  },
});
