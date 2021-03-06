// @import
import AllMahjongValImg from "../AllMahjongValImg";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import RoundSettlementWndComp from "./RoundSettlementWndComp";

/**
 * 创建麻将碰牌分组
 * 
 * @param SELF this 指针
 * @param nT 麻将牌数值
 * @return Cocos 节点
 */
export function __createMahjongPengGroup(SELF: RoundSettlementWndComp, nT: number): cc.Node {
    if (null == SELF) {
        return null;
    }

    // 获取 Bundle
    let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

    if (null == oBundle) {
        return null;
    }

    // 获取预制体
    let oPrefab = cc.find("Template/MahjongPengGroup", SELF.node);
    // 创建新节点
    let oNewNode = cc.instantiate(oPrefab);

    for (let nIndex = 0; nIndex < 3; nIndex++) {
        cc.find(`MahjongTile_${nIndex}_/Val`, oNewNode)
            .getComponent(cc.Sprite)
            .spriteFrame = AllMahjongValImg.getSpriteFrame(nT);
    }

    return oNewNode;
}
