const btn = document.querySelector('button'),
       text = document.querySelector('textarea');
       btn.addEventListener('click', () =>{
        let utterance = new SpeechSynthesisUtterance(text.value);
        speechSynthesis.speak(utterance);
       }) ;