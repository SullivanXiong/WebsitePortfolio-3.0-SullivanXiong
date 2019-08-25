
def calculate_liquidated(leverage):
    liquidate = 100/leverage
    print("with {} leverage,   liquidate at {}".format(round(leverage, 2), round(liquidate, 2)))
    return liquidate


def calculate_leverage():
    result = []
    start = 1.00
    while start < 100:
        liquidate = calculate_liquidated(start)
        if len(result) != 0:
            if (result[len(result) - 1] - liquidate) <= 0.01:
                result.append(liquidate)
                return result
        result.append(liquidate)
        start += 0.01
    return result
        

if __name__ == "__main__":
    calculate_leverage()
