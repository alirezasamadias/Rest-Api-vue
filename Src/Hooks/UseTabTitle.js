import { onMounted } from "vue";

const useTabTitle = (TabTitleText) => 
    onMounted(() => 
        document.title = `Rest API - ${TabTitleText}`
    );

export default useTabTitle;