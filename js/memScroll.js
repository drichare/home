    const memGrid = document.querySelector('.mem-grid');
    let autoScrollInterval;
    let userInteracted = false;

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (!userInteracted) {
                memGrid.scrollLeft += 0.5; // ゆっくりスクロール
            }
        }, 10); // スクロール速度をここで調整
    }

    function stopAutoScroll() {
        userInteracted = true;
        clearInterval(autoScrollInterval);
    }

    // スクロール開始
    window.addEventListener('load', () => {
        startAutoScroll();
    });

    // ユーザーの操作を検知して自動スクロールを止める
    memGrid.addEventListener('wheel', stopAutoScroll);
    memGrid.addEventListener('touchstart', stopAutoScroll);
    memGrid.addEventListener('mousedown', stopAutoScroll);