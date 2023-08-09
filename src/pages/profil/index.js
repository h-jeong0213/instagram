import styled from "@emotion/styled";
import { useState } from "react";
import NavMenu from "../../components/nav";

const ProfilPage = () => {
  {
    /* let [more, setMore] = useState(false) */
  }
  let [tabs, setTabs] = useState(2);
  let [activeTab, setActiveTab] = useState(0);
  let [settingOn, setSettingon] = useState(false);
  let tabMenu = [
    { id: 0, title: "게시물" },
    { id: 1, title: "릴스" },
    { id: 2, title: "저장 됨" },
    { id: 3, title: "태그 됨" },
  ];
  function TabContent({ tabs }) {
    return [
      <UserContentInfo>게시물 내용</UserContentInfo>,
      <UserContentInfo>릴스 내용</UserContentInfo>,
      <UserContentInfo>저장 됨 내용</UserContentInfo>,
      <UserContentInfo>태그 됨 내용</UserContentInfo>,
    ][tabs];
  }

  return (
    <Container>
      {/* Nav 구간 */}
      <NavMenu></NavMenu>
      {/* Nav 끝 */}
      {/* Profil 시작 */}
      {/* Profil 해더 */}
      <ProfilContainer>
        <ProfilHeader>
          <ProfilImgBox>
            <ProfilImg></ProfilImg>
          </ProfilImgBox>

          <ProfilBox>
            <ProfilMainBox>
              <UserName>username</UserName>
              <ProfilBtn>
                <a>프로필 편집</a>
              </ProfilBtn>
              <ProfilBtn>
                <a>보관된 스토리 보기</a>
              </ProfilBtn>
              {/* 모달 버튼 */}
              <SettingBtn
                onClick={() => {
                  setSettingon(true);
                }}
              >
                <SettingImg src="gear-wide.svg" />
              </SettingBtn>
              {/* 모달 버튼 */}
            </ProfilMainBox>
            <ProfilMainBox>
              <ContentCount>게시물 00</ContentCount>
              <UserFriends>팔로워 00</UserFriends>
              <UserFriends>팔로우 00</UserFriends>
            </ProfilMainBox>
            <ProfilMainBox>
              <div>usernickneme</div>
            </ProfilMainBox>
          </ProfilBox>
        </ProfilHeader>
        {/* Profil 해더 끝*/}
        <StoryHighlight>
          <NewHighlight>
            <NewHighlightBtn src="plus.svg"></NewHighlightBtn>
            <NewHighlightTxt>신규</NewHighlightTxt>
          </NewHighlight>
        </StoryHighlight>
        <ContentContiner>
          <ContentList defaultActiveKey="link0">
            {tabMenu.map((tabMenu, i) => {
              return (
                <ContentListItem
                  className={activeTab == i ? "active" : ""}
                  onClick={() => {
                    setTabs(i);
                    setActiveTab(i);
                  }}
                >
                  <ContentListItemImg src="heart (1).svg" />
                  {tabMenu.title}
                </ContentListItem>
              );
            })}
          </ContentList>
          <TabContent tabs={tabs} />
        </ContentContiner>
      </ProfilContainer>
      {/* 모달 창 */}
      {settingOn == true ? (
        <SettingModal>
          <SettingMenu>
            <SettingMenuBtn>로그아웃</SettingMenuBtn>
            <SettingMenuBtn
              onClick={() => {
                setSettingon(false);
              }}
            >
              취소
            </SettingMenuBtn>
          </SettingMenu>
        </SettingModal>
      ) : null}
      {/* 모달 창 끝 */}
    </Container>
  );
};

export default ProfilPage;
// 전체 Container

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// Profil main Content

// Prifil Header 시작
export const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProfilHeader = styled.div`
  display: flex;
  width: 935px;
  padding: 30px 20px 0;
  margin-bottom: 44px;
`;

export const ProfilImgBox = styled.div`
  width: 291px;
  height: 150px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
`;

export const ProfilImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("stitch2.png");
  background-position: center;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const ProfilBox = styled.div`
  height: 150px;
`;

export const ProfilMainBox = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 15px;
`;

export const UserName = styled.h2`
  font-size: 20px;
  font-weight: normal;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfilBtn = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 5px 13px;
  border-radius: 8px;
  background-color: #f3e8ff;

  &:hover {
    cursor: pointer;
    background-color: #fde5ec;
  }
`;

export const SettingBtn = styled.div`
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const SettingImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SettingModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SettingMenu = styled.div`
  position: fixed;
  left: 40%;
  top: 50%;
  width: 400px;
  border-radius: 10px;
  background-color: white;
`;

export const SettingMenuBtn = styled.div`
  height: 50px;
  padding: 8px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #fde5ec;
  }
`;

export const ContentCount = styled.div``;

export const UserFriends = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

// Profil Header 끝

// Profil NewStory 시작

export const StoryHighlight = styled.div`
  width: 935px;
  height: 130px;
  margin-bottom: 44px;
`;

export const NewHighlight = styled.div`
  width: 115px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const NewHighlightBtn = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 87px;
  height: 87px;
  border-radius: 50%;
  background-color: #f3e8ff;
`;

export const NewHighlightTxt = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin: 10px 0;
`;

// Profil NewStory 끝

// UserContent 시작
export const ContentContiner = styled.div`
  width: 935px;
  height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ContentList = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-right: 30px;
  height: 100%;
  font-size: 13px;
  font-weight: bold;
  color: gray;

  &:hover {
    cursor: pointer;
  }

  &.active {
    border-top: 1px solid black;
    color: black;
  }
`;
export const ContentListItemImg = styled.img`
  width: 13px;
  height: 13px;
`;
export const UserContentInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
