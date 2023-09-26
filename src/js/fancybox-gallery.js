import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


Fancybox.bind('[data-fancybox = gallery]', {
  fullScreen : {
		requestOnStart : true
	},
  hideScrollbar: true,
  Thumbs: {
    showOnStart: false,
  },
  dragToClose:false,
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["slideshow", "close"],
    },
  }
  });    

