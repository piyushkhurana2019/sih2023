const productData = [
    {
      id: 1,
      name: "MASSDROP X SENNHEISER HD 6XX HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 220,
      rating: 5,
      timeLeft: 27,
      totalSales: 7479,
      category: "ELECTRONICS" 
    },
    {
      id: 2,
      name: "DROP + SENNHEISER PC38X GAMING HEADSET",
      image:
        "https://massdrop-s3.imgix.net/product-images/drop-sennheiser-pc38x-gaming-headset/FP/CeH9BYVoTniYOsScfzZ0_PC.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 169,
      rating: 5,
      timeLeft: 24,
      totalSales: 6898,
      category: "ELECTRONICS" 
    },
    {
      id: 3,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "ELECTRONICS"  
    } ,
    {
      id: 4,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "ELECTRONICS"  
    } ,
    {
      id: 5,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "ELECTRONICS"  
    } ,
    {
      id: 6,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "ELECTRONICS"  
    } ,
    {
      id: 7,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "Furniture"  
    } ,
    {
      id: 8,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "Furniture"  
    } ,
    {
      id: 9,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "Furniture"  
    } ,
    {
      id: 10,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "Furniture"  
    } ,
    {
      id: 11,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "Furniture"  
    } ,
    {
      id: 12,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "Furniture"  
    } ,
    {
      id: 13,
      name: "MASSDROP X SENNHEISER HD 58X JUBILEE HEADPHONES",
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      productType: "openBackHeadphones",
      price: 170,
      rating: 4,
      timeLeft: 21,
      totalSales: 6347,
      category: "Furniture"  
    } ,
  ];
  export default productData;