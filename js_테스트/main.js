<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"







 var IMP = window.IMP; // 생략가능
  IMP.init('imp13253833'); // <-- 본인 가맹점 식별코드 삽입

<button onclick="requestPay()">결제하기</button>
------------------------------------------------
<script>
function requestPay() {
  IMP.init('imp13253833'); //iamport 대신 자신의 "가맹점 식별코드"를 사용
  IMP.request_pay({
    pg: "inicis",
    pay_method: "card",
    merchant_uid : 'merchant_'+new Date().getTime(),
    name : '결제테스트',
    amount : 14000,
    buyer_email : 'iamport@siot.do',
    buyer_name : '구매자',
    buyer_tel : '010-1234-5678',
    buyer_addr : '서울특별시 강남구 삼성동',
    buyer_postcode : '123-456'
  }, function (rsp) { // callback
      if (rsp.success) {
        ...,
        // 결제 성공 시 로직,
        ...
      } else {
        ...,
        // 결제 실패 시 로직,
        ...
      }
  });
}
</script>