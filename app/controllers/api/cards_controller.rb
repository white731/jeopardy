class Api::CardsController < ApplicationController

  def index
    category = Category.find(params[:category_id])
    render json: category.cards.all
  end
end
