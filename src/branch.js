// 分支关系链
export default {
    // 其他旁系
    '{G2}':['祖父'],
    '{G2},w':['祖母'],
    '{G2},s':['父'],
    '{G2},s,w':['母'],
    '{G2},s,s&o':['兄'],
    '{G2},s,s&l':['弟'],
    '{G2},s,s':['兄弟'],
    '{G2},s,d&o':['姊'],
    '{G2},s,d&l':['妹'],
    '{G2},s,d':['姊妹'],
    '{G2},s,s,s':['男','子'],
    '{G2},s,s,d':['女'],
    '{G2C},s&o':['伯父'],
    '{G2C},s&o,w':['伯母'],
    '{G2C},s&l':['叔父'],
    '{G2C},s&l,w':['叔母'],
    '{G2C},s,s&o':['兄'],
    '{G2C},s,s&l':['弟'],
    '{G2C},s,s,s':['侄男'],
    '{G2C},s,s,d':['侄女'],
    '{G2C},s,d&o':['姐'],
    '{G2C},s,d&l':['妹'],
    '{G2C},d':['姑母'],
    '{G2C},d,h':['姑父'],
    '{G2C},d,s&o':['兄'],
    '{G2C},d,s&l':['弟'],
    '{G2C},d,s,s':['侄男'],
    '{G2C},d,s,d':['侄女'],
    '{G2C},d,d&o':['姐'],
    '{G2C},d,d&l':['妹'],
    // 高祖以上
    'f,f,f,f,f,f,f,f,{G1M}':['鼻祖父'],
    'f,f,f,f,f,f,f,f,{G1M},w':['鼻祖母'],
    'f,f,f,f,f,f,f,f,{G1W}':['鼻祖母'],
    'f,f,f,f,f,f,f,f,{G1W},h':['鼻祖父'],
    'f,f,f,f,f,f,f,{G1M}':['远祖父'],
    'f,f,f,f,f,f,f,{G1M},w':['远祖母'],
    'f,f,f,f,f,f,f,{G1W}':['远祖母'],
    'f,f,f,f,f,f,f,{G1W},h':['远祖父'],
    'f,f,f,f,f,f,{G1M}':['太祖父'],
    'f,f,f,f,f,f,{G1M},w':['太祖母'],
    'f,f,f,f,f,f,{G1W}':['姑太祖母'],
    'f,f,f,f,f,f,{G1W},h':['姑太祖父'],
    'f,f,f,f,f,{G1M}':['烈祖父'],
    'f,f,f,f,f,{G1M},w':['烈祖母'],
    'f,f,f,f,f,{G1W}':['烈祖母'],
    'f,f,f,f,f,{G1W},h':['烈祖父'],
    'f,f,f,f,{G1M}':['天祖父'],
    'f,f,f,f,{G1M},w':['天祖母'],
    'f,f,f,f,{G1W}':['天祖母'],
    'f,f,f,f,{G1W},h':['天祖父'],
    // 高祖辈
    'f,f,f,{G1M}':['高祖父','外曾外曾外毑父'],
    'f,f,f,{G1M},w':['高祖母','外曾外曾外毑母'],
    'f,f,f,{G1W}':['高祖母','外曾外曾外毑母'],
    'f,f,f,{G1W},h':['高祖父','外曾外曾外毑父'],
    'f,f,m,{G1M}':['高外祖父','外曾外曾毑父'],
    'f,f,m,{G1M},w':['高外祖母','外曾外曾毑母'],
    'f,f,m,{G1W}':['高外祖母','外曾外曾毑母'],
    'f,f,m,{G1W},h':['高外祖父','外曾外曾毑父'],
    'f,m,f,{G1M}':['曾外曾祖父','外高外毑父'],
    'f,m,f,{G1M},w':['曾外曾祖母','外高外毑母'],
    'f,m,f,{G1W}':['曾外曾祖母','外高外毑母'],
    'f,m,f,{G1W},h':['曾外曾祖父','外高外毑父'],
    'f,m,m,{G1M}':['曾外曾外祖父','外高毑父'],
    'f,m,m,{G1M},w':['曾外曾外祖母','外高毑母'],
    'f,m,m,{G1W}':['曾外曾外祖母','外高毑母'],
    'f,m,m,{G1W},h':['曾外曾外祖父','外高毑父'],
    'm,f,f,{G1M}':['外高祖父','曾外曾外毑父'],
    'm,f,f,{G1M},w':['外高祖母','曾外曾外毑母'],
    'm,f,f,{G1W}':['外高祖母','曾外曾外毑母'],
    'm,f,f,{G1W},h':['外高祖父','曾外曾外毑父'],
    'm,f,m,{G1M}':['外高外祖父','曾外曾祖毑父'],
    'm,f,m,{G1M},w':['外高外祖母','曾外曾祖毑母'],
    'm,f,m,{G1W}':['外高外祖母','曾外曾祖毑母'],
    'm,f,m,{G1W},h':['外高外祖父','曾外曾祖毑父'],
    'm,m,f,{G1M}':['外曾外曾祖父','高外毑父'],
    'm,m,f,{G1M},w':['外曾外曾祖母','高外毑母'],
    'm,m,f,{G1W}':['外曾外曾祖母','高外毑母'],
    'm,m,f,{G1W},h':['外曾外曾祖父','高外毑父'],
    'm,m,m,{G1M}':['外曾外曾外祖父','高毑父'],
    'm,m,m,{G1M},w':['外曾外曾外祖母','高毑母'],
    'm,m,m,{G1W}':['外曾外曾外祖母','高毑母'],
    'm,m,m,{G1W},h':['外曾外曾外祖父','高毑父'],
    // 曾祖辈
    'f,f,{G1M}':['?曾祖父','曾?祖父','?太公','太?公','?公太','太?爷','?太爷','?太爷爷','太?爷爷'],
    'f,f,{G1M},w':['?曾祖母','曾?祖母','?太婆','太?婆','?婆太','太?奶','?太奶','?太奶奶','太?奶奶'],
    'f,f,{G1W}':['?曾祖母','曾?祖母','?太婆','太?婆','?婆太','太?奶','?太奶','?太奶奶','太?奶奶'],
    'f,f,{G1W},h':['?曾祖父','曾?祖父','?太公','太?公','?公太','太?爷','?太爷','?太爷爷','太?爷爷'],
    'f,m,{G1M}':['?曾外祖父','曾外?祖父','?太外公','太外?公','太外?爷','?太外爷','?太外爷爷','太外?爷爷'],
    'f,m,{G1M},w':['?曾外祖母','曾外?祖母','?太外婆','太外?婆','太外?奶','?太外奶','?太外奶奶','太外?奶奶'],
    'f,m,{G1W}':['?曾外祖母','曾外?祖母','?太外婆','太外?婆','太外?奶','?太外奶','?太外奶奶','太外?奶奶'],
    'f,m,{G1W},h':['?曾外祖父','曾外?祖父','?太外公','太外?公','太外?爷','?太外爷','?太外爷爷','太外?爷爷'],
    'm,f,{G1M}':['?外曾祖父','外曾?祖父','?外太公','外太?公','外太?爷','?外太爷','?外太爷爷','外太?爷爷'],
    'm,f,{G1M},w':['?外曾祖母','外曾?祖母','?外太婆','外太?婆','外太?奶','?外太奶','?外太奶奶','外太?奶奶'],
    'm,f,{G1W}':['?外曾祖母','外曾?祖母','?外太婆','外太?婆','外太?奶','?外太奶','?外太奶奶','外太?奶奶'],
    'm,f,{G1W},h':['?外曾祖父','外曾?祖父','?外太公','外太?公','外太?爷','?外太爷','?外太爷爷','外太?爷爷'],
    'm,m,{G1M}':['?外曾外祖父','外曾外?祖父','?外太外公','外太外?公','外太外?爷','?外太外爷','?外太外爷爷','外太外?爷爷'],
    'm,m,{G1M},w':['?外曾外祖母','外曾外?祖母','?外太外婆','外太外?婆','外太外?奶','?外太外奶','?外太外奶奶','外太外?奶奶'],
    'm,m,{G1W}':['?外曾外祖母','外曾外?祖母','?外太外婆','外太外?婆','外太外?奶','?外太外奶','?外太外奶奶','外太外?奶奶'],
    'm,m,{G1W},h':['?外曾外祖父','外曾外?祖父','?外太外公','外太外?公','外太外?爷','?外太外爷','?外太外爷爷','外太?外爷爷'],
    // 祖辈
    'f,{G1M}':['祖父','公','太?父','奶爷','爷爷','爷'],
    'f,{G1M},w':['祖母','婆','太?母','奶奶','奶'],
    'f,{G1W}':['祖母','婆','太?母','奶奶','奶'],
    'f,{G1W},h':['祖父','公','太?父','奶爷','爷爷','爷'],
    'm,{G1M}':['外祖父','外公','外爷','外?公','外?祖父','外太?父','太外?父','姥爷','姥公','毑公','毑爷','毑父','嘎公'],
    'm,{G1M},w':['外祖母','外婆','外奶','外?婆','外?祖母','外太?母','太外?母','姥姥','姥娘','姥婆','毑婆','毑毑','毑母','嘎嘎','嫏嫏','嫏娘','姥'],
    'm,{G1W}':['外祖母','外婆','外奶','外?婆','外?祖母','外太?母','太外?母','姥姥','姥娘','姥婆','毑婆','毑毑','毑母','嘎嘎','嫏嫏','嫏娘','姥'],
    'm,{G1W},h':['外祖父','外公','外爷','外?公','外?祖父','外太?父','太外?父','姥爷','姥公','毑公','毑爷','毑父','嘎公'],
    'f,f,{G1},s&o':['伯祖父','伯爷爷'],
    'f,f,{G1},s&o,w':['伯祖母','伯奶奶'],
    'f,f,{G1},s&l':['叔祖父','叔爷爷'],
    'f,f,{G1},s&l,w':['叔祖母','叔奶奶'],
    'f,f,{G1},d':['姑祖母','姑奶奶'],
    'f,f,{G1},d,h':['姑祖父','姑爷爷'],
    'f,m,{G1},s':['舅祖父','舅爷爷'],
    'f,m,{G1},s,w':['舅祖母','舅奶奶'],
    'f,m,{G1},d':['姨祖母','姨爷爷'],
    'f,m,{G1},d,h':['姨祖父','姨奶奶'],
    'm,f,{G1},s&o':['伯外祖父','伯外公','伯姥爷'],
    'm,f,{G1},s&o,w':['伯外祖母','伯外婆','伯姥姥'],
    'm,f,{G1},s&l':['叔外祖父','叔外公','叔姥爷'],
    'm,f,{G1},s&l,w':['叔外祖母','叔外婆','叔姥姥'],
    'm,f,{G1},d':['姑外祖母','姑外婆','姑姥姥'],
    'm,f,{G1},d,h':['姑外祖父','姑外公','姑姥爷'],
    'm,m,{G1},s':['舅外祖父','舅外公','舅姥爷'],
    'm,m,{G1},s,w':['舅外祖母','舅外婆','舅姥姥'],
    'm,m,{G1},d':['姨外祖母','姨外公','姨姥爷'],
    'm,m,{G1},d,h':['姨外祖父','姨外婆','姨姥姥'],
    // 父辈
    '{G1M}':['父'],
    '{G1M},w':['母'],
    '{G1W}':['母'],
    '{G1W},h':['父'],
    'f,{G1},s&o':['伯父','伯伯','伯','大爷'],
    'f,{G1},s&o,w':['伯母','大娘'],
    'f,{G1},s&l':['叔父','叔爸','叔叔','叔'],
    'f,{G1},s&l,w':['叔母','婶'],
    'f,{G1},d':['姑母','姑姑','姑妈','姑'],
    'f,{G1},d,h':['姑父'],
    'm,{G1},s':['舅父','舅舅','舅爸','舅'],
    'm,{G1},s,w':['舅母','舅妈'],
    'm,{G1},d':['姨母','姨姨','姨妈','姨'],
    'm,{G1},d,h':['姨父','姨爸','姨丈'],
    // 同辈及以下
    '{G1},[s&o|s&l]':['兄弟'],
    '{G1},[s&o|s&l],w':['兄弟妇'],
    '{G1},s&o':['哥','兄'],
    '{G1},s&o,w':['嫂','嫂子','兄妇'],
    '{G1},s&l':['弟'],
    '{G1},s&l,w':['弟媳','弟妇'],
    '{G1},s,s':['侄男','侄子','侄儿'],
    '{G1},s,s,w':['侄妇'],
    '{G1},s,s,s':['侄孙男'],
    '{G1},s,s,s,w':['侄孙妇'],
    '{G1},s,s,s,s':['侄曾孙男'],
    '{G1},s,s,s,s,w':['侄曾孙妇'],
    '{G1},s,s,s,s,s':['侄玄孙男'],
    '{G1},s,s,s,s,s,w':['侄玄孙妇'],
    '{G1},s,s,s,s,d':['侄玄孙女'],
    '{G1},s,s,s,s,d,h':['侄玄孙婿'],
    '{G1},s,s,d':['侄孙女'],
    '{G1},s,s,d,h':['侄孙婿'],
    '{G1},s,s,s,d':['侄曾孙女'],
    '{G1},s,s,s,d,h':['侄曾孙婿'],
    '{G1},s,d':['侄女','侄女儿'],
    '{G1},s,d,h':['侄婿'],
    '{G1},s,d,s':['侄外孙男','外孙男'],
    '{G1},s,d,s,w':['侄外孙妇'],
    '{G1},s,d,d':['侄外孙女','外孙女'],
    '{G1},s,d,d,h':['侄外孙婿'],
    '{G1},[d&o|d&l]':['姐妹'],
    '{G1},[d&o|d&l],h':['姐妹壻'],
    '{G1},d&o':['姐'],
    '{G1},d&o,h':['姐夫'],
    '{G1},d&l':['妹'],
    '{G1},d&l,h':['妹夫'],
    '{G1},d,s':['甥男'],
    '{G1},d,s,w':['甥妇'],
    '{G1},d,s,s':['甥孙男'],
    '{G1},d,s,s,w':['甥孙妇'],
    '{G1},d,s,d':['甥孙女'],
    '{G1},d,s,d,h':['甥孙婿'],
    '{G1},d,d':['甥女'],
    '{G1},d,d,h':['甥婿'],
    '{G1},d,d,s':['甥外孙男','外孙男'],
    '{G1},d,d,s,w':['甥外孙妇'],
    '{G1},d,d,d':['甥外孙女','外孙女'],
    '{G1},d,d,d,h':['甥外孙婿'],
    // 夫族
    'h,f,{G1M}':['祖公父','祖公','祖翁','奶公'],
    'h,f,{G1M},w':['祖婆母','祖婆','祖姆','奶婆'],
    'h,f,{G1W}':['祖婆母','祖婆','祖姆','奶婆'],
    'h,f,{G1W},h':['祖公父','祖公','祖翁','奶公'],
    'h,m,{G1M}':['外祖公父','外祖公','外祖翁','姥公'],
    'h,m,{G1M},w':['外祖婆母','外祖婆','外祖姆','姥婆'],
    'h,m,{G1W}':['外祖婆母','外祖婆','外祖姆','姥婆'],
    'h,m,{G1W},h':['外祖公父','外祖公','外祖翁','姥公'],
    'h,{G1M}':['公父','公公'],
    'h,{G1M},w':['婆母','婆婆'],
    'h,{G1W}':['婆母','婆婆'],
    'h,{G1W},h':['公父','公公'],
    'h,{G1},s&o':['大伯子','大伯兄'],
    'h,{G1},s&o,w':['大婶子','大伯嫂'],
    'h,{G1},s&l':['小叔子','小叔弟'],
    'h,{G1},s&l,w':['小婶子','小叔弟妇'],
    'h,{G1},s':['伯叔'],
    'h,{G1},s,w':['妯娌'],
    'h,{G1},d&o':['大姑子','大姑姐'],
    'h,{G1},d&o,h':['大姑夫','大姑姐夫'],
    'h,{G1},d&l':['小姑子','小姑妹'],
    'h,{G1},d&l,h':['小姑夫','小姑妹夫'],
    'h,{G1},d':['姑子'],
    'h,{G1},d,h':['姑夫'],
    // 妻族
    'w,f,{G1M}':['祖岳父','太?岳','祖丈人','爷丈人','奶爷丈人'],
    'w,f,{G1M},w':['祖岳母','太?岳母','祖丈母','祖丈母娘','奶丈母娘','奶丈母'],
    'w,f,{G1W}':['祖岳母','太?岳母','祖丈母','祖丈母娘','奶丈母娘','奶丈母'],
    'w,f,{G1W},h':['祖岳父','太?岳父','祖丈人','爷丈人','奶爷丈人'],
    'w,m,{G1M}':['外祖岳父','外太?岳父','太外?岳父','外祖丈人','姥爷丈人'],
    'w,m,{G1M},w':['外祖岳母','外太?岳母','太外?岳母','外祖丈母','外祖丈母娘','姥丈母娘','姥丈母'],
    'w,m,{G1W}':['外祖岳母','外太?岳母','太外?岳母','外祖丈母','外祖丈母娘','姥丈母娘','姥丈母'],
    'w,m,{G1W},h':['外祖岳父','外太?岳父','太外?岳父','外祖丈人','外爷丈人','姥爷丈人'],
    'w,{G1M}':['岳父','丈人','丈人爹'],
    'w,{G1M},w':['岳母','丈母','丈母娘'],
    'w,{G1W}':['岳母','丈母','丈母娘'],
    'w,{G1W},h':['岳父','丈人','丈人爹'],
    'w,{G1},s&o':['大舅子','大舅兄','舅兄'],
    'w,{G1},s&o,w':['大舅妇','大舅姆','大舅兄妇','舅兄妇','舅姐','大舅姐','大妗子','大妗儿'],
    'w,{G1},s&l':['小舅子','小舅弟','舅弟'],
    'w,{G1},s&l,w':['小舅妇','小舅姆','小舅弟妇','舅弟妇','舅妹','小舅妹','小妗子','小妗儿'],
    'w,{G1},s':['舅子'],
    'w,{G1},s,w':['舅嫂'],
    'w,{G1},d&o':['大姨子','大姨姐','姨姐'],
    'w,{G1},d&o,h':['大姨夫','大姨姐夫','襟兄','姨兄','大姨哥','大尹子'],
    'w,{G1},d&l':['小姨子','小姨妹','姨妹'],
    'w,{G1},d&l,h':['小姨夫','小姨妹夫','襟弟','姨弟','小姨弟','小尹子'],
    'w,{G1},d':['姨子'],
    'w,{G1},d,h':['连襟','连桥'],
    // 子辈及以下
    '{G0},s':['男','男儿','儿','子'],
    '{G0},s,w':['媳妇','媳','妇'],
    '{G0},s,s':['孙','孙男','孙子'],
    '{G0},s,s,w':['孙妇'],
    '{G0},s,s,s':['曾孙','曾孙男'],
    '{G0},s,s,s,w':['曾孙妇'],
    '{G0},s,s,s,s':['玄孙','玄孙男'],
    '{G0},s,s,s,d':['玄孙女'],
    '{G0},s,s,d':['曾孙女'],
    '{G0},s,s,d,h':['曾孙婿'],
    '{G0},s,s,d,s':['玄外孙','玄外孙男'],
    '{G0},s,s,d,d':['玄外孙女'],
    '{G0},s,d':['孙女'],
    '{G0},s,d,h':['孙婿'],
    '{G0},s,d,s':['曾外孙','曾外孙男'],
    '{G0},s,d,s,w':['曾外孙妇'],
    '{G0},s,d,s,s':['曾外曾孙','曾外曾孙男'],
    '{G0},s,d,s,d':['曾外曾孙女'],
    '{G0},s,d,d':['曾外孙女'],
    '{G0},s,d,d,h':['曾外孙婿'],
    '{G0},s,d,d,s':['曾外曾外孙','曾外曾外孙男'],
    '{G0},s,d,d,d':['曾外曾外孙女'],
    '{G0},d':['女','女儿'],
    '{G0},d,h':['女婿','婿'],
    '{G0},d,s':['外孙','外孙男'],
    '{G0},d,s,w':['外孙妇'],
    '{G0},d,s,s':['外曾孙','外曾孙男'],
    '{G0},d,s,s,w':['外曾孙妇'],
    '{G0},d,s,s,s':['外玄孙','外玄孙男'],
    '{G0},d,s,s,d':['外玄孙女'],
    '{G0},d,s,d':['外曾孙女'],
    '{G0},d,s,d,h':['外曾孙婿'],
    '{G0},d,s,d,s':['外玄外孙','外玄外孙男'],
    '{G0},d,s,d,d':['外玄外孙女'],
    '{G0},d,d':['外孙女'],
    '{G0},d,d,h':['外孙婿'],
    '{G0},d,d,s':['外曾外孙','外曾外孙男'],
    '{G0},d,d,s,w':['外曾外孙妇'],
    '{G0},d,d,s,s':['外曾外曾孙','外曾外曾孙男'],
    '{G0},d,d,s,d':['外曾外曾孙女'],
    '{G0},d,d,d':['外曾外孙女'],
    '{G0},d,d,d,h':['外曾外孙婿'],
    '{G0},d,d,d,s':['外曾外曾外孙'],
    '{G0},d,d,d,d':['外曾外曾外孙女'],
    // 姻亲关系
    '{M2W},xb':['舅祖父'],
    '{M2W},xb,w':['舅祖母'],
    '{M2W},xb,s&o':['舅表伯父'],
    '{M2W},xb,s&o,w':['舅表伯母'],
    '{M2W},xb,s&l':['舅表叔父'],
    '{M2W},xb,s&l,w':['舅表叔母'],
    '{M2W},xb,d':['舅表姑母'],
    '{M2W},xb,d,h':['舅表姑父'],
    '{M2W},xs':['姨祖母'],
    '{M2W},xs,h':['姨祖父'],
    '{M2W},xs,s&o':['姨伯父'],
    '{M2W},xs,s&o,w':['姨伯母'],
    '{M2W},xs,s&l':['姨叔父'],
    '{M2W},xs,s&l,w':['姨叔母'],
    '{M2W},xs,d':['姨姑母'],
    '{M2W},xs,d,h':['姨姑父'],
    '{M2M},xb':['叔祖父'],
    '{M2M},xb,w':['叔祖母'],
    '{M2M},xb,s&o':['堂伯父'],
    '{M2M},xb,s&o,w':['堂伯母'],
    '{M2M},xb,s&l':['堂叔父'],
    '{M2M},xb,s&l,w':['堂叔母'],
    '{M2M},xb,d':['堂姑母'],
    '{M2M},xb,d,h':['堂姑父'],
    '{M2M},xs':['姑祖母'],
    '{M2M},xs,h':['姑祖父'],
    '{M2M},xs,s&o':['姑表伯父'],
    '{M2M},xs,s&o,w':['姑表伯母'],
    '{M2M},xs,s&l':['姑表叔父'],
    '{M2M},xs,s&l,w':['姑表叔母'],
    '{M2M},xs,d':['姑表姑母'],
    '{M2M},xs,d,h':['姑表姑父'],
    '{M1W},f':['外祖父'],
    '{M1W},f,xb,s':['堂舅父'],
    '{M1W},f,xb,s,w':['堂舅母'],
    '{M1W},f,xb,d':['堂姨母'],
    '{M1W},f,xb,d,h':['堂姨父'],
    '{M1W},f,ob':['伯外祖父'],
    '{M1W},f,ob,w':['伯外祖母'],
    '{M1W},f,lb':['叔外祖父'],
    '{M1W},f,lb,w':['叔外祖母'],
    '{M1W},f,xs':['姑外祖母'],
    '{M1W},f,xs,h':['姑外祖父'],
    '{M1W},f,xs,s':['姑表舅父'],
    '{M1W},f,xs,s,w':['姑表舅母'],
    '{M1W},f,xs,d':['姑表姨母'],
    '{M1W},f,xs,d,h':['姑表姨父'],
    '{M1W},m':['外祖母'],
    '{M1W},m,xb':['舅外祖父'],
    '{M1W},m,xb,w':['舅外祖母'],
    '{M1W},m,xb,s':['舅表舅父'],
    '{M1W},m,xb,s,w':['舅表舅母'],
    '{M1W},m,xb,d':['舅表姨母'],
    '{M1W},m,xb,d,h':['舅表姨父'],
    '{M1W},m,xs':['姨外祖母'],
    '{M1W},m,xs,h':['姨外祖父'],
    '{M1W},m,xs,s':['姨舅父'],
    '{M1W},m,xs,s,w':['姨舅母'],
    '{M1W},m,xs,d':['姨姨母'],
    '{M1W},m,xs,d,h':['姨姨父'],
    '{M1W},xb':['舅父'],
    '{M1W},xb,w':['舅母'],
    '{M1W},xb,[s|d]':['舅表兄弟姊妹'],
    '{M1W},xb,[s&o|s&l]':['舅表兄弟'],
    '{M1W},xb,[s&o|s&l],w':['舅表兄弟妇'],
    '{M1W},xb,s&o':['舅表兄'],
    '{M1W},xb,s&o,w':['舅表兄妇'],
    '{M1W},xb,s&l':['舅表弟'],
    '{M1W},xb,s&l,w':['舅表弟妇'],
    '{M1W},xb,s,s':['舅表侄男','侄男'],
    '{M1W},xb,s,s,w':['舅表侄妇','侄妇'],
    '{M1W},xb,s,d':['舅表侄女','侄女'],
    '{M1W},xb,s,d,h':['舅表侄婿','侄婿'],
    '{M1W},xb,[d&o|d&l]':['舅表姊妹'],
    '{M1W},xb,[d&o|d&l],h':['舅表姊妹壻'],
    '{M1W},xb,d&o':['舅表姊'],
    '{M1W},xb,d&o,h':['舅表姊壻'],
    '{M1W},xb,d&l':['舅表妹'],
    '{M1W},xb,d&l,h':['舅表妹壻'],
    '{M1W},xb,d,s':['舅表甥男','甥男'],
    '{M1W},xb,d,s,w':['舅表甥妇','甥妇'],
    '{M1W},xb,d,d':['舅表甥女','甥女'],
    '{M1W},xb,d,d,h':['舅表甥婿','甥婿'],
    '{M1W},xs':['姨母'],
    '{M1W},xs,h':['姨父'],
    '{M1W},xs,[s|d]':['姨表兄弟姊妹'],
    '{M1W},xs,[s&o|s&l]':['姨表兄弟'],
    '{M1W},xs,[s&o|s&l],w':['姨表兄弟妇'],
    '{M1W},xs,s&o':['姨表兄'],
    '{M1W},xs,s&o,w':['姨表兄妇'],
    '{M1W},xs,s&l':['姨表弟'],
    '{M1W},xs,s&l,w':['姨表弟妇'],
    '{M1W},xs,s,s':['姨表侄男','侄男'],
    '{M1W},xs,s,s,w':['姨表侄妇','侄妇'],
    '{M1W},xs,s,d':['姨表侄女','侄女'],
    '{M1W},xs,s,d,h':['姨表侄婿','侄婿'],
    '{M1W},xs,[d&o|d&l]':['姨表姊妹'],
    '{M1W},xs,[d&o|d&l],h':['姨表姊妹壻'],
    '{M1W},xs,d&o':['姨表姊'],
    '{M1W},xs,d&o,h':['姨表姊壻'],
    '{M1W},xs,d&l':['姨表妹'],
    '{M1W},xs,d&l,h':['姨表妹壻'],
    '{M1W},xs,d,s':['姨表甥男','甥男'],
    '{M1W},xs,d,s,w':['姨表甥妇','甥妇'],
    '{M1W},xs,d,d':['姨表甥女','甥女'],
    '{M1W},xs,d,d,h':['姨表甥婿','甥婿'],
    '{M1M},f':['祖父'],
    '{M1M},f,xb,s&o':['堂伯父'],
    '{M1M},f,xb,s&o,w':['堂伯母'],
    '{M1M},f,xb,s&l':['堂叔父'],
    '{M1M},f,xb,s&l,w':['堂叔母'],
    '{M1M},f,xb,d':['堂姑母'],
    '{M1M},f,xb,d,h':['堂姑父'],
    '{M1M},f,ob':['伯祖父'],
    '{M1M},f,ob,w':['伯祖母'],
    '{M1M},f,lb':['叔祖父'],
    '{M1M},f,lb,w':['叔祖母'],
    '{M1M},f,xs':['姑祖母'],
    '{M1M},f,xs,h':['姑祖父'],
    '{M1M},f,xs,s&o':['姑表伯父'],
    '{M1M},f,xs,s&o,w':['姑表伯母'],
    '{M1M},f,xs,s&l':['姑表叔父'],
    '{M1M},f,xs,s&l,w':['姑表叔母'],
    '{M1M},f,xs,d':['姑表姑母'],
    '{M1M},f,xs,d,h':['姑表姑父'],
    '{M1M},m':['祖母'],
    '{M1M},m,xb':['舅祖父'],
    '{M1M},m,xb,w':['舅祖母'],
    '{M1M},m,xb,s&o':['舅表伯父'],
    '{M1M},m,xb,s&o,w':['舅表伯母'],
    '{M1M},m,xb,s&l':['舅表叔父'],
    '{M1M},m,xb,s&l,w':['舅表叔母'],
    '{M1M},m,xb,d':['舅表姑母'],
    '{M1M},m,xb,d,h':['舅表姑父'],
    '{M1M},m,xs':['姨祖母'],
    '{M1M},m,xs,h':['姨祖父'],
    '{M1M},m,xs,s&o':['姨伯父'],
    '{M1M},m,xs,s&o,w':['姨伯母'],
    '{M1M},m,xs,s&l':['姨叔父'],
    '{M1M},m,xs,s&l,w':['姨叔母'],
    '{M1M},m,xs,d':['姨姑母'],
    '{M1M},m,xs,d,h':['姨姑父'],
    '{M1M},xb':['叔伯父'],
    '{M1M},xb,w':['叔伯母'],
    '{M1M},ob':['伯父'],
    '{M1M},ob,w':['伯母'],
    '{M1M},lb':['叔父'],
    '{M1M},lb,w':['叔母'],
    '{M1M},xb,[s|d]':['叔表兄弟姊妹'],
    '{M1M},xb,[s&o|s&l]':['叔表兄弟'],
    '{M1M},xb,[s&o|s&l],w':['叔表兄弟妇'],
    '{M1M},xb,s&o':['叔表兄'],
    '{M1M},xb,s&o,w':['叔表兄妇'],
    '{M1M},xb,s&l':['叔表弟'],
    '{M1M},xb,s&l,w':['叔表弟妇'],
    '{M1M},xb,s,s':['叔表侄男','侄男'],
    '{M1M},xb,s,s,w':['叔表侄妇','侄妇'],
    '{M1M},xb,s,d':['叔表侄女','侄女'],
    '{M1M},xb,s,d,h':['叔表侄婿','侄婿'],
    '{M1M},xb,[d&o|d&l]':['叔表姊妹'],
    '{M1M},xb,[d&o|d&l],h':['叔表姊妹壻'],
    '{M1M},xb,d&o':['叔表姊'],
    '{M1M},xb,d&o,h':['叔表姊壻'],
    '{M1M},xb,d&l':['叔表妹'],
    '{M1M},xb,d&l,h':['叔表妹壻'],
    '{M1M},xb,d,s':['叔表甥男','甥男'],
    '{M1M},xb,d,s,w':['叔表甥妇','甥妇'],
    '{M1M},xb,d,d':['叔表甥女','甥女'],
    '{M1M},xb,d,d,h':['叔表甥婿','甥婿'],
    '{M1M},xs':['姑母'],
    '{M1M},xs,h':['姑父'],
    '{M1M},xs,[s|d]':['姑表兄弟姊妹'],
    '{M1M},xs,[s&o|s&l]':['姑表兄弟'],
    '{M1M},xs,[s&o|s&l],w':['姑表兄弟妇'],
    '{M1M},xs,s&o':['姑表兄'],
    '{M1M},xs,s&o,w':['姑表兄妇'],
    '{M1M},xs,s&l':['姑表弟'],
    '{M1M},xs,s&l,w':['姑表弟妇'],
    '{M1M},xs,s,s':['姑表侄男','侄男'],
    '{M1M},xs,s,s,w':['姑表侄妇','侄妇'],
    '{M1M},xs,s,d':['姑表侄女','侄女'],
    '{M1M},xs,s,d,h':['姑表侄婿','侄婿'],
    '{M1M},xs,[d&o|d&l]':['姑表姊妹'],
    '{M1M},xs,[d&o|d&l],h':['姑表姊妹壻'],
    '{M1M},xs,d&o':['姑表姊'],
    '{M1M},xs,d&o,h':['姑表姊壻'],
    '{M1M},xs,d&l':['姑表妹'],
    '{M1M},xs,d&l,h':['姑表妹壻'],
    '{M1M},xs,d,s':['姑表甥男','甥男'],
    '{M1M},xs,d,s,w':['姑表甥妇','甥妇'],
    '{M1M},xs,d,d':['姑表甥女','甥女'],
    '{M1M},xs,d,d,h':['姑表甥婿','甥婿'],
    '{M0},f':['父'],
    '{M0},f,f':['祖父'],
    '{M0},f,f,ob':['伯祖父'],
    '{M0},f,f,ob,w':['伯祖母'],
    '{M0},f,f,lb':['叔祖父'],
    '{M0},f,f,lb,w':['叔祖母'],
    '{M0},f,f,xs':['姑祖母'],
    '{M0},f,f,xs,h':['姑祖父'],
    '{M0},f,m':['祖母'],
    '{M0},f,m,xb':['舅祖父'],
    '{M0},f,m,xb,w':['舅祖母'],
    '{M0},f,m,xs':['姨祖母'],
    '{M0},f,m,xs,h':['姨祖父'],
    '{M0},f,ob':['伯父'],
    '{M0},f,ob,w':['伯母'],
    '{M0},f,lb':['叔父'],
    '{M0},f,lb,w':['叔母'],
    '{M0},f,xb,[s|d]':['叔表兄弟姊妹','叔表姊妹兄弟'],
    '{M0},f,xb,s':['叔表兄弟'],
    '{M0},f,xb,s,w':['叔表兄弟妇'],
    '{M0},f,xb,s&o':['叔表兄'],
    '{M0},f,xb,s&o,w':['叔表兄妇'],
    '{M0},f,xb,s&l':['叔表弟'],
    '{M0},f,xb,s&l,w':['叔表弟妇'],
    '{M0},f,xb,d':['叔表姊妹'],
    '{M0},f,xb,d,h':['叔表姊妹壻'],
    '{M0},f,xb,d&o':['叔表姊'],
    '{M0},f,xb,d&o,h':['叔表姊壻'],
    '{M0},f,xb,d&l':['叔表妹'],
    '{M0},f,xb,d&l,h':['叔表妹壻'],
    '{M0},f,xs':['姑母'],
    '{M0},f,xs,h':['姑父'],
    '{M0},f,xs,[s|d]':['姑表兄弟姊妹','姑表姊妹兄弟'],
    '{M0},f,xs,s':['姑表兄弟'],
    '{M0},f,xs,s,w':['姑表兄弟妇'],
    '{M0},f,xs,s&o':['姑表兄'],
    '{M0},f,xs,s&o,w':['姑表兄妇'],
    '{M0},f,xs,s&l':['姑表弟'],
    '{M0},f,xs,s&l,w':['姑表弟妇'],
    '{M0},f,xs,d':['姑表姊妹'],
    '{M0},f,xs,d,h':['姑表姊妹壻'],
    '{M0},f,xs,d&o':['姑表姊'],
    '{M0},f,xs,d&o,h':['姑表姊壻'],
    '{M0},f,xs,d&l':['姑表妹'],
    '{M0},f,xs,d&l,h':['姑表妹壻'],
    '{M0},m':['母'],
    '{M0},m,f':['外祖父'],
    '{M0},m,f,ob':['伯外祖父'],
    '{M0},m,f,ob,w':['伯外祖母'],
    '{M0},m,f,lb':['叔外祖父'],
    '{M0},m,f,lb,w':['叔外祖母'],
    '{M0},m,f,xs':['姑外祖母'],
    '{M0},m,f,xs,h':['姑外祖父'],
    '{M0},m,m':['外祖母'],
    '{M0},m,m,xb':['舅外祖父'],
    '{M0},m,m,xb,w':['舅外祖母'],
    '{M0},m,m,xs':['姨外祖母'],
    '{M0},m,m,xs,h':['姨外祖父'],
    '{M0},m,xb':['舅父'],
    '{M0},m,xb,w':['舅母'],
    '{M0},m,xb,[s|d]':['舅表兄弟姊妹','舅表姊妹兄弟'],
    '{M0},m,xb,s':['舅表兄弟'],
    '{M0},m,xb,s,w':['舅表兄弟妇'],
    '{M0},m,xb,s&o':['舅表兄'],
    '{M0},m,xb,s&o,w':['舅表兄妇'],
    '{M0},m,xb,s&l':['舅表弟'],
    '{M0},m,xb,s&l,w':['舅表弟妇'],
    '{M0},m,xb,d':['舅表姊妹'],
    '{M0},m,xb,d,h':['舅表姊妹壻'],
    '{M0},m,xb,d&o':['舅表姊'],
    '{M0},m,xb,d&o,h':['舅表姊壻'],
    '{M0},m,xb,d&l':['舅表妹'],
    '{M0},m,xb,d&l,h':['舅表妹壻'],
    '{M0},m,xs':['姨母'],
    '{M0},m,xs,h':['姨父'],
    '{M0},m,xs,[s|d]':['姨兄弟姊妹','姨姊妹兄弟'],
    '{M0},m,xs,s':['姨兄弟'],
    '{M0},m,xs,s,w':['姨兄弟妇'],
    '{M0},m,xs,s&o':['姨兄'],
    '{M0},m,xs,s&o,w':['姨兄妇'],
    '{M0},m,xs,s&l':['姨弟'],
    '{M0},m,xs,s&l,w':['姨弟妇'],
    '{M0},m,xs,d':['姨姊妹'],
    '{M0},m,xs,d,h':['姨姊妹壻'],
    '{M0},m,xs,d&o':['姨姊'],
    '{M0},m,xs,d&o,h':['姨姊壻'],
    '{M0},m,xs,d&l':['姨妹'],
    '{M0},m,xs,d&l,h':['姨妹壻'],
    '{M0},[ob|lb]':['兄弟'],
    '{M0},[ob|lb],w':['兄弟妇'],
    '{M0},ob':['兄'],
    '{M0},ob,w':['兄妇'],
    '{M0},lb':['弟'],
    '{M0},lb,w':['弟妇'],
    '{M0},xb,s':['侄男','侄子','侄儿'],
    '{M0},xb,s,w':['侄妇'],
    '{M0},xb,d':['侄女'],
    '{M0},xb,d,h':['侄婿'],
    '{M0},[os|ls]':['姊妹'],
    '{M0},[os|ls],h':['姊妹壻'],
    '{M0},os':['姊'],
    '{M0},os,h':['姊壻'],
    '{M0},ls':['妹'],
    '{M0},ls,h':['妹壻'],
    '{M0},xs,s':['甥男'],
    '{M0},xs,s,w':['甥妇'],
    '{M0},xs,d':['甥女'],
    '{M0},xs,d,h':['甥婿'],
    '{M-1},[f&o|f&l]':['兄弟'],
    '{M-1},f&o':['兄'],
    '{M-1},f&l':['弟'],
    '{M-1},f,f':['父'],
    '{M-1},f,f,f':['祖父'],
    '{M-1},f,f,m':['祖母'],
    '{M-1},f,f,ob':['伯父'],
    '{M-1},f,f,ob,w':['伯母'],
    '{M-1},f,f,lb':['叔父'],
    '{M-1},f,f,lb,w':['叔母'],
    '{M-1},f,m':['母'],
    '{M-1},f,m,f':['外祖父'],
    '{M-1},f,m,m':['外祖母'],
    '{M-1},f,[ob|lb]':['叔兄弟'],
    '{M-1},f,[ob|lb],w':['叔兄弟妇'],
    '{M-1},f,ob':['叔兄'],
    '{M-1},f,ob,w':['叔兄妇'],
    '{M-1},f,lb':['叔弟'],
    '{M-1},f,lb,w':['叔弟妇'],
    '{M-1},f,xb,s':['叔男'],
    '{M-1},f,xb,d':['叔女'],
    '{M-1},f,[os|ls]':['姑姊妹'],
    '{M-1},f,[os|ls],h':['姑姊妹壻'],
    '{M-1},f,os':['姑姊'],
    '{M-1},f,os,h':['姑姊壻'],
    '{M-1},f,ls':['姑妹'],
    '{M-1},f,ls,h':['姑妹壻'],
    '{M-1},f,xs,s':['姑男'],
    '{M-1},f,xs,d':['姑女'],
    '{M-1},[m&o|m&l]':['姊妹'],
    '{M-1},m&o':['姊'],
    '{M-1},m&l':['妹'],
    '{M-1},m,f':['父'],
    '{M-1},m,f,f':['祖父'],
    '{M-1},m,f,m':['祖母'],
    '{M-1},m,m':['母'],
    '{M-1},m,m,f':['外祖父'],
    '{M-1},m,m,m':['外祖母'],
    '{M-1},m,[ob|lb]':['舅兄弟'],
    '{M-1},m,[ob|lb],w':['舅兄弟妇'],
    '{M-1},m,ob':['舅兄'],
    '{M-1},m,ob,w':['舅兄妇'],
    '{M-1},m,lb':['舅弟'],
    '{M-1},m,lb,w':['舅弟妇'],
    '{M-1},m,xb,s':['舅男'],
    '{M-1},m,xb,d':['舅女'],
    '{M-1},m,[os|ls]':['姨姊妹'],
    '{M-1},m,[os|ls],h':['姨姊妹壻'],
    '{M-1},m,os':['姨姊'],
    '{M-1},m,os,h':['姨姊壻'],
    '{M-1},m,ls':['姨妹'],
    '{M-1},m,ls,h':['姨妹壻'],
    '{M-1},m,xs,s':['姨男'],
    '{M-1},m,xs,d':['姨女'],
    '{M-1},xb':['男'],
    '{M-1},xb,w':['妇'],
    '{M-1},xb,s':['孙男'],
    '{M-1},xb,s,w':['孙妇'],
    '{M-1},xb,d':['孙女'],
    '{M-1},xb,d,h':['孙婿'],
    '{M-1},xs':['女'],
    '{M-1},xs,h':['婿'],
    '{M-1},xs,s':['外孙男'],
    '{M-1},xs,s,w':['外孙妇'],
    '{M-1},xs,d':['外孙女'],
    '{M-1},xs,d,h':['外孙婿'],
    '{M-2},f':['男'],
    '{M-2},f,f&o':['兄'],
    '{M-2},f,f&l':['弟'],
    '{M-2},f,m&o':['姊'],
    '{M-2},f,m&l':['妹'],
    '{M-2},m':['女'],
    '{M-2},m,f&o':['兄'],
    '{M-2},m,f&l':['弟'],
    '{M-2},m,m&o':['姊'],
    '{M-2},m,m&l':['妹'],
    '{M-2},xb':['孙男'],
    '{M-2},xb,w':['孙妇'],
    '{M-2},xs':['孙女'],
    '{M-2},xs,h':['孙婿'],
};
