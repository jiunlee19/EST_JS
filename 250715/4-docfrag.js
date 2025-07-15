// document Fragment: DOM 트리에는 존재하지 않고 메모리상에만 존재하는 DOM 노드
const itemList = document.getElementById("item-list");

// 메모리상에만 존재하는 가짜 DOM 만들기
const docFrag = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    // itemList.appendChild(li);
    // 100번 렌더링 됨.

    docFrag.appendChild(li);
}

// 마지막에 한 번만 실제 DOM에 추가
itemList.appendChild(docFrag);

// 리스트가 많아질수록(내부 콘텐츠가 복잡해질수록) 성능 차이가 체감된다!!
