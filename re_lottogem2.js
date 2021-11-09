const lotto = []

for (let i = 0; i < 46; i++) {
    lotto.push(i)//여기에 이미값을 담아 놓음
}
for (let i = 0; i < 6; i++) {
    const index = parseInt(Math.random()*lotto.length)//여기서 반복할떄마다
    //랜덤한 0에서 44까지의 숫자 생성
    console.log(lotto.splice(index, 1))
}