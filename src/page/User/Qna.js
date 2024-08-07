import React from "react";
import Toggle from "../../components/Form/Toggle";

function Qna() {
    const qnaDate = [
        {
            title: "[회원정보 / 로그인] 비밀번호를 잊어버렸어요!",
            date: "2024.07.11",
            content:
                "비밀번호를 분실하셨나요?<br>비밀번호 찾기 경로는 아래와 같습니다. <br>별숲 접속 > 로그인 페이지 > 비밀번호 찾기<br>!! 비밀번호 찾기 시에는 이메일 인증후 비밀번호 변경하게 됩니다.",
        },
        {
            title: "[회원정보 / 로그인] 내 정보를 수정하고싶어요!",
            date: "2024.07.11",
            content:
                "내 정보를 수정하고 싶으신가요?<br>내 정보 수정하는 경로는 아래와 같습니다.<br>별숲 접속 > 우측 하단 ‘내 정보’ > 닉네임 옆 ‘아이콘 이미지’ > 변경하고 싶은 정보 클릭 > 변경 후<br> ‘수정하기’ 버튼 클릭!! 단, 연락처 변경 시에는 본인확인 과정이 진행될 수 있으며,타인의 정보를 무단으로 도용하는 행위가 적발될 시 ‘별숲’이용이 제한될 수 있는 점 참고 부탁드립니다.",
        },
        {
            title: "[캠핑장 예약 관련] 예약번호를 잊어버렸어요!",
            date: "2024.07.11",
            content:
                "별숲 로그인 후 우측 하단 ‘내 정보’ > ‘내 캠핑 보기’ > 예약 목록 을 통해 예약을 조회하실 수 있습니다",
        },
        {
            title: "[캠핑장 예약 관련] 예약을 했는데 조회가 되지 않아요!",
            date: "2024.07.11",
            content:
                "예약 조회가 되지 않아 많이 놀라셨을 것 같습니다.<br>예약자명/연락처/캠핑장명을 별숲 고객센터로 전달해주시면 빠르게 확인후 안내 드리겠습니다.",
        },
        {
            title: "[캠핑장 예약 관련] 캠핑장 예약 내역이 궁금해요!",
            date: "2024.07.11",
            content:
                "나의 캠핑장 예약 내역이 궁금하신가요?<br>나의 캠핑장 예약 내역 확인하는 경로는 아래와 같습니다.<br>우측하단 > ‘내 정보’ > ‘내 캠핑 보기’ > 예약 목록",
        },
        {
            title: "[캠핑장 예약 관련] 어떤 경우에 예약 제한이 되나요?",
            date: "2024.07.11",
            content:
                "캠핑장 측에서 규정한 조건에 해당하는 경우에 일정기간 동안 예약 제한이 될 수 있습니다.",
        },
        {
            title: "[캠핑장 예약 관련] 기존 예약 건을 양도 / 양수할 수 있나요?",
            date: "2024.07.11",
            content:
                "안타깝께도 별숲에서는 ‘양도 및 양수’ 기능을 제공하지 않습니다.<br>양도/양수 관련해서는 예약하신 캠핑장 측으로 문의하시면 너무 감사드리겠습니다.",
        },
        {
            title: "[결제/환불] 현금영수증 발급 가능한가요?",
            date: "2024.07.11",
            content:
                "네, 가능합니다.<br>다만 현금영수증 발행은 예약하신 해당 캠핑장에서 직접 처리해 드려야 하는 부분으로, 번거로우시겠지만 이용하신 캠핑장으로 직접 문의 부탁드리겠습니다.<br>!! 캠핑장 상세 > 기본정보 > 대표번호에서 확인하실 수 있습니다.",
        },
        {
            title: "[결제/환불] 캠핑장 예약금을 환불받고 싶어요!",
            date: "2024.07.11",
            content:
                "관련 문의 사항이 있는 경우 번거로우시더라도 예약하신 캠핑장으로 문의 부탁드립니다.<br>연락처 확인 방법 : <br>→ 별숲 로그인 > 캠핑장 검색 후 상세페이지 > 기본정보 > 대표번호",
        },
        {
            title: "[결제/환불] 천재지변 환불 규정",
            date: "2024.07.11",
            content:
                "호우주의보 관련 취소 및 환불에 대한 소비자보호원 권고사항은 아래와 같습니다.<br>- 입실 당일 호의주의보, 산사태 등 기상 악화로 인한 캠핑장 방문/이용이 불가한 경우<br>- 위의 내용에 대한 증빙을 캠핑장에 제출 할 경우 전액 환불 가능.<br>- 다만, 입실 당일 외 전일자 취소하거나, 이에 대한 증빙이 불가할 경우에는 캠핑장 기존 취소/환불 규정에 따름.<br>위의 소비자 보호원 권고사항 참고 부탁드리며,별숲은 통신판매중개자로, 각 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자(캠핑장)에게 있습니다.<br>따라서 취소/환불 규정은 관련 법령에 위반 되는 경우 외에 별숲에서 강제할 수 없는 점 양해 부탁드립니다.<br>취소환불과 관련한 상세 문의는 예약하신 각 캠핑장으로 문의시 정확한 상담이 가능한 점 참고 부탁 드립니다.<br>연락처 확인 방법 : <br>→ 별숲 로그인 > 캠핑장 검색 후 상세페이지 > 기본정보 > 대표번호",
        },
        {
            title: "[기타] 등록한 글을 삭제하고 싶어요",
            date: "2024.07.11",
            content:
                "&#8226; 나의 ‘별숲 기록’을 삭제하고 싶으신가요?<br>- 우측 하단 ‘내 정보’ > ‘내 캠핑 보기’ > 별숲 기록 > 삭제하고 싶은 별숲 기록 상단 우측 ‘x’ 버튼 클릭<br>&#8226; 나의 ‘상품 리뷰를’ 삭제하고 싶으신가요?<br>- 우측 하단 ‘내 정보’ >  ‘내 쇼핑 보기’ > 리뷰 > 삭제하고 싶은 리뷰 클릭 > 해당 상품 리뷰페이지 > 나의 리뷰 글 우측 ‘x’ 버튼 클릭",
        },
        {
            title: "[기타] 흰 화면이 보이고 정보가 안나올 경우 해결 방법",
            date: "2024.07.11",
            content:
                "별숲 이용중에 서버 업데이트로 흰 화면만 보이는 경우가 간혹 발생될 수 있습니다.<br>페이지 새로고침을 해주세요.<br>!!별숲 이용에 참고 부탁드리며, 보다 더 안정적인 서비스를 위해 끊임없이 개발하는 ‘별숲’이 되도록 노력하겠습니다. ( ´╹ᗜ╹`*)<br><br>/ ( _ _ ) ",
        },
        {
            title: "[기타] 별숲은 어떤 서비스인가요?",
            date: "2024.07.11",
            content:
                "<a href='/camp/list'>캠핑장 예약하기</a><br><a href='/diary/list'>캠핑후기 모아보기</a><br><a href='/store/list'>캠핑관련 상품 쇼핑하기</a>",
        },
        {
            title: "[고객센터] 고객센터 문의",
            date: "2024.07.11",
            content:
                "- 전화번호 | 02-123-4567<br>- 운영시간 | 평일 10:00 ~ 18:00 (점심시간 13:00 ~ 14:00) <br>* 주말 , 공휴일 휴무입니다.",
        },
    ];
    return (
        <div>
            {qnaDate.map((qnaDate, index) => {
                return (
                    <Toggle
                        key={index}
                        title={qnaDate.title}
                        date={qnaDate.date}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: qnaDate.content,
                            }}
                        ></div>
                    </Toggle>
                );
            })}
        </div>
    );
}

export default Qna;