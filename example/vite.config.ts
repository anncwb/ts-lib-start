import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';

export default (): UserConfigExport => {
  return {
    plugins: [vue(), jsx()],
  };
};
